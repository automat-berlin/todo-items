import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateTodoItemDto } from '../dtos/create-todo-item.dto';
import { TodoItemsService } from '../services/todo-items.service';
import { TodoItem } from '../models/todo-item.entity';
import { ApiResponse } from '@nestjs/swagger';

@Controller('todo-items')
export class TodoItemsController {
  constructor(private readonly todoItemsService: TodoItemsService) {}

  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @Post()
  create(@Body() createTodoItemDto: CreateTodoItemDto) {
    return this.todoItemsService.create(createTodoItemDto);
  }

  @Get()
  findAll(): Promise<TodoItem[]> {
    return this.todoItemsService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Show specified TodoItem information!'})
  @ApiResponse({ status: 404, description: 'TodoItem is not found!'}) // Only for demonstration!
  @Get(':id')
  findOne(@Param('id') id: string): Promise<TodoItem> {
    return this.todoItemsService.findOne(id);
  }
  
  @Put(':id')
  update(@Param('id') id, @Body() todoItem: TodoItem): Promise<TodoItem> {
    todoItem.id = Number(id);
    return this.todoItemsService.update(todoItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.todoItemsService.remove(id);
  }
}
