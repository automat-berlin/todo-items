import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoItem } from '../models/todo-item.entity';
import { CreateTodoItemDto } from '../dtos/create-todo-item.dto';

@Injectable()
export class TodoItemsService {
  constructor(
    @InjectRepository(TodoItem)
    private todoItemsRepository: Repository<TodoItem>,
  ) {}

  create(createTodoItemDto: CreateTodoItemDto): Promise<TodoItem> {
    const todoItem = new TodoItem();

    todoItem.name = createTodoItemDto.name;
    todoItem.description = createTodoItemDto.description;
    todoItem.isDone = false;

    return this.todoItemsRepository.save(todoItem);
  }

  async findAll(): Promise<TodoItem[]> {
    return this.todoItemsRepository.find();
  }

  findOne(id: string): Promise<TodoItem> {
    return this.todoItemsRepository.findOne(id);
  }

  async update(todoItem: TodoItem): Promise<any> {
    await this.todoItemsRepository.update(todoItem.id, todoItem);
  }

  async remove(id: string): Promise<void> {
    await this.todoItemsRepository.delete(id);
  }
}