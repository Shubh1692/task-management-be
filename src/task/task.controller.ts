// task.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiTags } from "@nestjs/swagger";
import { TaskDto } from '../dto/taks.dto';

@ApiTags("task")
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Get()
  public async getAll() {
    return await this.taskService.getAll();
  }

  @Get(':id')
  public async getById(@Param('id') id: string) {
    return await this.taskService.getById(id);
  }

  @Post()
  public async createTask(@Body() taskDto: TaskDto): Promise<any> {
    return await this.taskService.createTask(taskDto);
  }

  @Put(':id')
  public async updateTask(@Param('id') id: string, @Body() taskDto: TaskDto) {
    return await this.taskService.updateTask(id, taskDto);
  }

  @Delete(':id')
  public async deleteById(@Param('id') id: string,) {
    return await this.taskService.deleteById(id);
  }
}