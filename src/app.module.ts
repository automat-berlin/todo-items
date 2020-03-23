import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemsController } from './todo-items/todo-items.controller';
import { TodoItemsService } from './todo-items/todo-items.service';
import { TodoItemsModule } from './todo-items/todo-items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), TodoItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
