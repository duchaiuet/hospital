import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HospitalModule } from './modules/hospital/hospital.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, HospitalModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
