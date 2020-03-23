import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateTodoItemDto } from './create-todo-item.dto';
import { TodoItemsService } from './todo-items.service';
import { TodoItem } from './todo-item.entity';

@Controller('todo-items')
export class TodoItemsController {
  constructor(private readonly todoItemsService: TodoItemsService) {}

  @Post()
  create(@Body() createTodoItemDto: CreateTodoItemDto) {
    return this.todoItemsService.create(createTodoItemDto);
  }

  @Get()
  findAll(): Promise<TodoItem[]> {
    return this.todoItemsService.findAll();
  }

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
