import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Project } from 'src/projects/entities/project.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const { projectId, ...taskData } = createTaskDto;
      const project = await this.projectRepository.findOneByOrFail({
        id: projectId,
      });
      const newTask = this.taskRepository.create({
        ...taskData,
        project,
      });
      return await this.taskRepository.save(newTask);
    } catch (error) {
      throw new BadRequestException('هنگام ایجاد تسک مشکلی به وجود آمده');
    }
  }

  async findAll() {
    const tasks = await this.taskRepository.find({ relations: ['project'] });

    return tasks;
  }

  async findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
