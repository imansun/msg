import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { lookupAdUser } from './ldap.service';
import { Department } from '../department/department.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(Department)
    private deptRepo: Repository<Department>,
    private jwtService: JwtService,
  ) {}

  private async resolveDisplayName(windowsUser: string | null): Promise<string | null> {
    if (!windowsUser) return null;
    try {
      const adUser = await lookupAdUser(windowsUser);
      return adUser?.displayName || null;
    } catch {
      return null;
    }
  }

  async register(dto: RegisterDto, ip: string) {
    const existingUser = await this.userRepo.findOne({
      where: { username: dto.username },
    });
    if (existingUser) throw new ConflictException('نام کاربری قبلاً استفاده شده');

    const existingIp = await this.userRepo.findOne({ where: { ip } });
    if (existingIp)
      throw new BadRequestException(
        'با این دستگاه/آی‌پی قبلاً ثبت نام شده',
      );

    const existingFingerprint = await this.userRepo.findOne({
      where: { fingerprint: dto.fingerprint },
    });
    if (existingFingerprint)
      throw new BadRequestException(
        'با این اثرانگشت دستگاه قبلاً ثبت نام شده',
      );

    const hash = await bcrypt.hash(dto.password, 10);
    const isFirstUser = (await this.userRepo.count()) === 0;

    const windowsUser = dto.windowsUser || null;
    const displayName = await this.resolveDisplayName(windowsUser);

    const user = this.userRepo.create({
      username: dto.username,
      password: hash,
      displayName,
      windowsUser,
      ip,
      fingerprint: dto.fingerprint,
      isAdmin: isFirstUser,
      isApproved: isFirstUser,
    });

    await this.userRepo.save(user);

    return {
      message: isFirstUser
        ? 'حساب ادمین ساخته شد. اکنون وارد شوید.'
        : 'ثبت نام موفق. منتظر تأیید ادمین باشید.',
      isAdmin: user.isAdmin,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({
      where: { username: dto.username },
    });
    if (!user) throw new UnauthorizedException('اطلاعات ورود نادرست است');

    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('اطلاعات ورود نادرست است');

    if (!user.isApproved) {
      throw new ForbiddenException('حساب شما منتظر تأیید ادمین است');
    }

    if (user.isActive === false) {
      throw new ForbiddenException('حساب شما غیرفعال شده است');
    }

    if (!user.displayName && user.windowsUser) {
      const dn = await this.resolveDisplayName(user.windowsUser);
      if (dn) {
        user.displayName = dn;
        await this.userRepo.save(user);
      }
    }

    const payload = {
      sub: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
    };
    const token = this.jwtService.sign(payload);

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        displayName: user.displayName,
        isAdmin: user.isAdmin,
      },
    };
  }

  async getMe(userId: number) {
    const user = await this.userRepo.findOne({
      where: { id: userId },
      relations: { departments: true },
    });
    if (!user) return null;
    return {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      isAdmin: user.isAdmin,
      departmentIds: (user.departments || []).map((d) => d.id),
    };
  }

  async getPendingUsers() {
    return this.userRepo.find({
      where: { isApproved: false },
      select: { id: true, username: true, displayName: true, windowsUser: true, ip: true, createdAt: true },
    });
  }

  async approveUser(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new BadRequestException('کاربر یافت نشد');
    user.isApproved = true;
    if (!user.displayName && user.windowsUser) {
      const dn = await this.resolveDisplayName(user.windowsUser);
      if (dn) user.displayName = dn;
    }
    await this.userRepo.save(user);
    return { message: 'کاربر تأیید شد' };
  }

  async rejectUser(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new BadRequestException('کاربر یافت نشد');
    await this.userRepo.remove(user);
    return { message: 'کاربر رد و حذف شد' };
  }

  async getAllUsers() {
    return this.userRepo.find({
      select: { id: true, username: true, displayName: true, windowsUser: true, isAdmin: true, isApproved: true, isActive: true, ip: true, createdAt: true },
      relations: { departments: true },
    });
  }

  async getApprovedUsers(requestUserId?: number) {
    if (!requestUserId) {
      return this.userRepo.find({
        where: { isApproved: true },
        select: { id: true, username: true, displayName: true, isAdmin: true },
      });
    }

    const currentUser = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.departments', 'dept')
      .where('user.id = :uid', { uid: requestUserId })
      .getOne();

    if (!currentUser || currentUser.isAdmin) {
      return this.userRepo.find({
        where: { isApproved: true },
        select: { id: true, username: true, displayName: true, isAdmin: true },
      });
    }

    if (!currentUser.departments || currentUser.departments.length === 0) {
      const onlySelfAndAdmins = await this.userRepo
        .createQueryBuilder('user')
        .where('user.id = :uid', { uid: requestUserId })
        .orWhere('user.isAdmin = :admin', { admin: true })
        .select(['user.id', 'user.username', 'user.displayName', 'user.isAdmin'])
        .getMany();
      return onlySelfAndAdmins;
    }

    const deptIds = currentUser.departments.map((d) => d.id);

    const allApproved = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.departments', 'dept')
      .where('user.isApproved = :approved', { approved: true })
      .getMany();

    const result = allApproved.filter((u) => {
      if (u.isAdmin) return true;
      if (u.id === requestUserId) return true;
      if (!u.departments || u.departments.length === 0) return false;
      return u.departments.some((d) => deptIds.includes(d.id));
    });

    return result.map((u) => ({
      id: u.id,
      username: u.username,
      displayName: u.displayName,
      isAdmin: u.isAdmin,
    }));
  }

  async assignDepartments(userId: number, departmentIds: number[]) {
    const user = await this.userRepo.findOne({
      where: { id: userId },
      relations: { departments: true },
    });
    if (!user) throw new BadRequestException('کاربر یافت نشد');

    const depts = await this.deptRepo.find({
      where: departmentIds.length > 0 ? { id: In(departmentIds) } : undefined,
    });

    user.departments = depts;
    await this.userRepo.save(user);

    return {
      message: `${depts.length} دپارتمان به ${user.username} تخصیص داده شد`,
      departments: depts.map((d) => ({ id: d.id, name: d.name })),
    };
  }

  async linkAdUser(userId: number, adUsername: string) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) throw new BadRequestException('کاربر یافت نشد');

    const adUser = await lookupAdUser(adUsername);
    if (!adUser) throw new BadRequestException('کاربری در AD با این نام یافت نشد');

    user.displayName = adUser.displayName || adUser.username;
    user.windowsUser = adUsername;
    await this.userRepo.save(user);

    return {
      message: `نام نمایشی "${user.displayName}" ثبت شد`,
      user: {
        id: user.id,
        username: user.username,
        displayName: user.displayName,
      },
    };
  }

  async toggleActive(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new BadRequestException('کاربر یافت نشد');
    if (user.isAdmin) throw new BadRequestException('غیرفعال کردن ادمین امکان‌پذیر نیست');
    user.isActive = !user.isActive;
    await this.userRepo.save(user);
    return {
      message: user.isActive ? 'کاربر فعال شد' : 'کاربر غیرفعال شد',
      isActive: user.isActive,
    };
  }
}
