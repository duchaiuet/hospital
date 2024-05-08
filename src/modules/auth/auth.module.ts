import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, PassportModule.register({ defaultStrategy: 'google' })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
