// task.service.ts 

import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../model/task.entity';
import { Repository } from 'typeorm';
import { configService } from '../config/config.service';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private readonly taskRepo: Repository<Task>) { }

  public getAll() {
    try {
      return this.taskRepo.find({
        order: {
          created_at: -1
        }
      });
    } catch (error) {
      throw new InternalServerErrorException(error?.message || error || configService.defaultErrorMsg);
    }
  }

  public async getById(id: string) {
    try {
      const task = await this.taskRepo.findOne({ where: { id } });
      if (!task) {
        throw new NotFoundException("No task found");
      }
      return task
    } catch (error) {
      throw new InternalServerErrorException(error?.message || error || configService.defaultErrorMsg);
    }
  }

  public createTask(task: Partial<Task>) {
    try {
      return this.taskRepo.save(task);
    } catch (error) {
      throw new InternalServerErrorException(error?.message || error || configService.defaultErrorMsg);
    }
  }

  public async updateTask(id: string, task: Partial<Task>) {
    try {
      await this.getById(id)
      return this.taskRepo.update(id, task);
    } catch (error) {
      throw new InternalServerErrorException(error?.message || error || configService.defaultErrorMsg);
    }
  }

  public async deleteById(id: string,) {
    try {
      await this.getById(id)
      return this.taskRepo.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error?.message || error || configService.defaultErrorMsg);
    }
  }
}