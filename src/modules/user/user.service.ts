import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private utilsService: UtilsService,
  ) {}

  async createUser(data: CreateUserDto): Promise<User> {
    try {
      data.email = this.utilsService.hashEmail(data.email);
      const isEmailExist = await this.userRepository
        .createQueryBuilder('users')
        .where('users.email=:email', { email: data.email })
        .getExists();

      if (isEmailExist) {
        throw new HttpException('email exists', HttpStatus.BAD_REQUEST);
      }

      return await this.userRepository.save(data);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {}

  async findOne(email: string, sub?: string): Promise<User> {
    const hashEmail = this.utilsService.hashEmail(email);
    const user = await this.userRepository
      .createQueryBuilder('users')
      .where('users.email=:email', { email: hashEmail })
      .getOne();

    if (!user) {
      throw new NotFoundException('Not found email.Please check your email');
    }
    if (sub) {
      user.sub = sub;
      user.isActive = true;
      await this.userRepository.save(user);
    }
    return user;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
