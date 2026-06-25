import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import express from 'express';
import TaskStatusEnum from './enums/TaskStatusEnum';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(
    @Res() res: express.Response,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    const createTask = await this.tasksService.create(createTaskDto);

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: createTask,
      message: 'Task Created',
    });
  }

  @Get()
  async findAll(
    @Res() res: express.Response,
    @Query('status') status?: TaskStatusEnum,
    @Query('project') projectId?: number,
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
  ) {
    const tasks = await this.tasksService.findAll(status, projectId, limit, page);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: tasks,
      message: 'Your Tasks Recieved Successfully',
    });
  }

  @Get(':id')
  async findOne(@Res() res: express.Response, @Param('id') id: string) {
    const task = await this.tasksService.findOne(+id);

    return res.status(HttpStatus.FOUND).json({
      statusCode: HttpStatus.FOUND,
      data: task,
      message: 'Task Founded Successfully',
    });
  }

  @Patch(':id')
  async update(
    @Res() res: express.Response,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const updatedTask = await this.tasksService.update(+id, updateTaskDto);

    return res.status(HttpStatus.ACCEPTED).json({
      statusCode: HttpStatus.ACCEPTED,
      data: updatedTask,
      message: 'Task Updated Successfully',
    });
  }

  @Delete(':id')
  async remove(@Res() res: express.Response, @Param('id') id: string) {
    await this.tasksService.remove(+id);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: null,
      message: 'Task Deleted',
    });
  }
}
