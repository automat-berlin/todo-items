import { Injectable } from '@nestjs/common';

export type Admin = any;

@Injectable()
export class AdminsService {
  private readonly admins: Admin[];

  constructor() {
    // It's demonstration purpose only. Don't store plain-text passwords in
    // a real application, instead store hashed password with bcrypt library!
    this.admins = [
      {
        adminId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        adminId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        adminId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<Admin | undefined> {
    return this.admins.find(admin => admin.username === username);
  }
}
