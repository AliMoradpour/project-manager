import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import ProjectStatusEnum from './enums/projectStatusEnum';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      const newProject = this.projectRepository.create(createProjectDto);

      return await this.projectRepository.save(newProject);
    } catch (error) {
      throw new BadRequestException('Creating project error :(');
    }
  }

  async findAll(
    status?: ProjectStatusEnum,
    limit: number = 10,
    page: number = 1,
  ) {
    const query = this.projectRepository.createQueryBuilder('projects');
    if (status) {
      query.where('projects.status = :status', { status });
    }

    query.skip((page - 1) * limit).take(limit);

    return await query.getMany();
  }

  async findOne(id: number) {
    const projectById = await this.projectRepository.findOneBy({ id });

    if (!projectById) throw new NotFoundException('Project Not Founded !');
    return projectById;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const foundProject = this.projectRepository.findOneBy({ id });
    if (!foundProject)
      throw new NotFoundException(`Project with id ${id} Not Founded!`);

    try {
      const updatedProject = await this.projectRepository.update(
        { id },
        updateProjectDto,
      );
      return updatedProject;
    } catch (error) {
      throw new BadRequestException('Update Failed');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
