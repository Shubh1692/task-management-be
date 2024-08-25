import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../model/task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import setupSwagger from "./task.swagger";

@Module({
  imports: [TypeOrmModule.forFeature([Task])],  // Register the Task entity here
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}

setupSwagger(TaskModule);
