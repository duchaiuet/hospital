import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async createUser(data: CreateUserDto): Promise<User> {
    try {
      const isEmailExist = await this.userRepository
        .createQueryBuilder('users')
        .where('users.email=:email', { email: data.email })
        .getCount();

      return await this.userRepository.save(data);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {}

  async findOne(email: string): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('users')
      .where('users.email=:email', { email: email })
      .getOne();

    if (!user) {
      throw new NotFoundException('Not found email.Please check your email');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
