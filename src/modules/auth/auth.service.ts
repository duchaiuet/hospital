import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../user/dto/create-user.dto';

Injectable();
export class AuthService {
  private jwtService: JwtService;
  constructor() {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    // if (!user) {
    //   throw new BadRequestException('Unauthenticated');
    // }
    // const userExists = await this.findUserByEmail(user.email);
    // if (!userExists) {
    //   return this.registerUser(user);
    // }
    // return this.generateJwt({
    //   sub: userExists.id,
    //   email: userExists.email,
    // });
  }

  async registerUser(user: CreateUserDto) {
    try {
      // const newUser = this.userRepository.create(user);
      // // newUser.username = generateFromEmail(user.email, 5);
      // await this.userRepository.save(newUser);
      // return this.generateJwt({
      //   sub: newUser.id,
      //   email: newUser.email,
      // });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserByEmail(email) {
    // const isEmailExist = await this.userRepository
    //   .createQueryBuilder('users')
    //   .where('users.email=:email', { email: email })
    //   .getOne();
    // if (!isEmailExist) {
    //   return null;
    // }
    // return isEmailExist;
  }
}
