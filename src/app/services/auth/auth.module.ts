import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminsModule } from '../../modules/admins.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [AdminsModule, PassportModule],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
