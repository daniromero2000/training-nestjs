import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { CreateTaskDTO } from './DTO/create-task-dto';
import { Request, Response } from 'express';

@Controller('task')
export class TaskController {

    @Get()
    getTask(): string {
        return 'Hello';
    }

    @Post()
    createTask(@Body() task: CreateTaskDTO): string {
        console.log(task)
        return 'Create'
    }

    @Delete(':id')
    getTaskByID(@Param('id') id): string {
        console.log(id);
        return 'Delete ' + id;
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDTO, @Param('id') id): string {
        console.log(id)
        console.log(task)
        return 'actualizado';
    }
}
