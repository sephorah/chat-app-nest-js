import { Logger, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { randomUUID } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(UsersService.name);

  saltRounds = process.env.SALT_ROUNDS;

  async create(createUserDto: CreateUserDto) {
    const data = {
      id: randomUUID(),
      email: createUserDto.email,
      username: createUserDto.username,
      password: createUserDto.password,
    };

    this.logger.log(`Creating new user ${createUserDto.email}`);
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    this.logger.log('Finding all users');
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    this.logger.log(`Finding user ${id}`);
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.logger.log(`Updating user ${id}`);
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
