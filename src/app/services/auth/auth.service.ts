import { Injectable } from '@nestjs/common';
import { AdminsService } from '../../services/admins.service';

@Injectable()
export class AuthService {
  constructor(private adminsService: AdminsService) {}

  async validateAdmin(username: string, pass: string): Promise<any> {
    const admin = await this.adminsService.findOne(username);
    if (admin && admin.password === pass) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }
}
