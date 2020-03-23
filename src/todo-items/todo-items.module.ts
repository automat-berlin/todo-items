import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItemsService } from './todo-items.service';
import { TodoItemsController } from './todo-items.controller';
import { TodoItem } from './todo-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoItem])],
  providers: [TodoItemsService],
  controllers: [TodoItemsController],
})
export class TodoItemsModule {}