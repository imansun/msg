import { IsObject, IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsObject()
  name: Record<string, string>;

  @IsObject()
  @IsOptional()
  description?: Record<string, string>;

  @IsNumber()
  @IsOptional()
  parentId?: number;
}
