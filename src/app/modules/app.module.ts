import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TodoItemsModule } from '../modules/todo-items.module';
import { AuthModule } from '../services/auth/auth.module';
import { AdminsModule } from '../modules/admins.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), TodoItemsModule, AuthModule, AdminsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
