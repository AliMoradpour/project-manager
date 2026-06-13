import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import ProjectStatusEnum from './enums/projectStatusEnum';
import express from 'express';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(
    @Res() res: express.Response,
    @Body() createProjectDto: CreateProjectDto,
  ) {
    const createProject = await this.projectsService.create(createProjectDto);

    return res.status(HttpStatus.CREATED).json({
      stausCode: HttpStatus.CREATED,
      data: createProject,
      message: 'Project Created',
    });
  }

  @Get()
  async findAll(
    @Res() res: express.Response,
    @Query('status') status?: ProjectStatusEnum,
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
  ) {
    const projects = await this.projectsService.findAll(status, limit, page);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: projects,
      message: 'Data Founded',
    });
  }

  @Get(':id')
  async findOne(@Res() res: express.Response, @Param('id') id: string) {
    const foundedProject = await this.projectsService.findOne(+id);
    return res.status(HttpStatus.FOUND).json({
      statusCode: HttpStatus.FOUND,
      data: foundedProject,
      message: 'Project Founded',
    });
  }

  @Patch(':id')
  async update(
    @Res() res: express.Response,
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    await this.projectsService.update(+id, updateProjectDto);

    return res.status(HttpStatus.ACCEPTED).json({
      statusCode: HttpStatus.ACCEPTED,
      message: 'Project Updated',
    });
  }

  @Delete(':id')
  async remove(@Res() res: express.Response, @Param('id') id: string) {
    await this.projectsService.remove(+id);
    return res.status(HttpStatus.ACCEPTED).json({
      statusCode: HttpStatus.ACCEPTED,
      message: 'Project Deleted Successfuly',
    });
  }
}
