import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItemsService } from '../services/todo-items.service';
import { TodoItemsController } from '../controllers/todo-items.controller';
import { TodoItem } from '../models/todo-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoItem])],
  providers: [TodoItemsService],
  controllers: [TodoItemsController],
})
export class TodoItemsModule {}