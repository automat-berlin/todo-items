import { Controller, Request, Get, Post, UseGuards, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../services/app.service';
import { LoginGuard } from '../services/auth/login.guard';
import { AuthenticatedGuard } from '../services/auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('admin/login')
  @Render('admin/login')
  index() {
    return;
  }

  @UseGuards(LoginGuard)
  @Post('admin/login')
  login(@Res() res: Response) {
    res.redirect('/admin/todo-items');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('admin/todo-items')
  @Render('admin/todo-items/index')
  listTodoItems() {
    return { message: 'Hello world!' };
  }

  @Get('admin/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout();
    res.redirect('/admin/login');
  }
}
