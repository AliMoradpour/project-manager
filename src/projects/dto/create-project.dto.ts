import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import ProjectStatusEnum from '../enums/projectStatusEnum';

export class CreateProjectDto {
  @IsNotEmpty({ message: 'نام پروژه نمیتواند خالی باشد' })
  @IsString({ message: 'مقدار پروژه باید حروف باشد' })
  name!: string;

  @IsEnum(ProjectStatusEnum, { message: 'مقدار وضعیت پروژه نا معتبر است' })
  status?: ProjectStatusEnum;
}
