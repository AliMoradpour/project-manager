import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import TaskStatusEnum from '../enums/TaskStatusEnum';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'title must not be empty' })
  @IsString({ message: 'task name must be string' })
  @MinLength(4, { message: 'title must be over 4 character' })
  title!: string;

  @IsOptional()
  @IsString({ message: 'description must be string' })
  description?: string;

  @IsEnum(TaskStatusEnum, { message: 'task status is not valid' })
  status!: TaskStatusEnum;

  @IsNumber()
  @IsNotEmpty()
  projectId!: number;
}
