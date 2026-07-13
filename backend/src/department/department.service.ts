import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { User } from '../auth/user.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private deptRepo: Repository<Department>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateDepartmentDto) {
    let level = 0;
    if (dto.parentId) {
      const parent = await this.deptRepo.findOne({
        where: { id: dto.parentId },
      });
      if (!parent) throw new BadRequestException('دپارتمان والد یافت نشد');
      level = parent.level + 1;
    }

    const dept = this.deptRepo.create({
      name: dto.name,
      description: dto.description,
      parentId: dto.parentId || null,
      level,
    });
    return this.deptRepo.save(dept);
  }

  async findAll() {
    return this.deptRepo.find({
      relations: { children: true, members: true },
      order: { level: 'ASC', id: 'ASC' },
    });
  }

  async findTree() {
    const all = await this.deptRepo.find({
      relations: { members: true },
      order: { id: 'ASC' },
    });
    return this.buildTree(all, null);
  }

  private buildTree(all: Department[], parentId: number | null): any[] {
    return all
      .filter((d) => d.parentId === parentId)
      .map((d) => ({
        ...d,
        children: this.buildTree(all, d.id),
      }));
  }

  async findOne(id: number) {
    const dept = await this.deptRepo.findOne({
      where: { id },
      relations: { children: true, members: true, parent: true },
    });
    if (!dept) throw new NotFoundException('دپارتمان یافت نشد');
    return dept;
  }

  async update(id: number, dto: Partial<CreateDepartmentDto>) {
    const dept = await this.deptRepo.findOne({ where: { id } });
    if (!dept) throw new NotFoundException('دپارتمان یافت نشد');
    if (dto.name) dept.name = dto.name;
    if (dto.description !== undefined) dept.description = dto.description;
    return this.deptRepo.save(dept);
  }

  async remove(id: number) {
    const dept = await this.deptRepo.findOne({
      where: { id },
      relations: { children: true },
    });
    if (!dept) throw new NotFoundException('دپارتمان یافت نشد');

    if (dept.children.length > 0) {
      throw new BadRequestException(
        'این دپارتمان زیرمجموعه دارد. ابتدا زیرمجموعه‌ها را حذف کنید',
      );
    }

    await this.deptRepo.remove(dept);
    return { message: 'دپارتمان حذف شد' };
  }

  async assignUser(deptId: number, userId: number) {
    const dept = await this.deptRepo.findOne({ where: { id: deptId }, relations: { members: true } });
    if (!dept) throw new NotFoundException('دپارتمان یافت نشد');

    const user = await this.userRepo.findOne({ where: { id: userId }, relations: { departments: true } });
    if (!user) throw new NotFoundException('کاربر یافت نشد');

    if (!user.departments) user.departments = [];
    if (!user.departments.find((d) => d.id === deptId)) {
      user.departments.push(dept);
      await this.userRepo.save(user);
    }
    const deptName = dept.name?.fa || dept.name?.en || JSON.stringify(dept.name);
    return { message: `کاربر ${user.username} به ${deptName} منتسب شد` };
  }

  async removeUser(deptId: number, userId: number) {
    const user = await this.userRepo.findOne({ where: { id: userId }, relations: { departments: true } });
    if (!user) throw new NotFoundException('کاربر یافت نشد');

    user.departments = (user.departments || []).filter((d) => d.id !== deptId);
    await this.userRepo.save(user);
    return { message: `کاربر ${user.username} از دپارتمان جدا شد` };
  }

  async getDepartmentMembers(deptId: number) {
    const dept = await this.deptRepo.findOne({
      where: { id: deptId },
      relations: { members: true },
    });
    if (!dept) return [];

    return dept.members
      .filter((u) => u.isApproved && u.isActive)
      .map((u) => ({
        id: u.id,
        username: u.username,
        displayName: u.displayName,
        isAdmin: u.isAdmin,
      }));
  }
}
