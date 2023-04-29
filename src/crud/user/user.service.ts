import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/Services/prisma-service/prisma.service';
import { BusinessError } from 'src/@core/Errors/BusinessError';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    await this.isEmailUnique(createUserDto.email);

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);

    const data = {
      name: createUserDto.name,
      email: createUserDto.email,
      role: createUserDto.role,
      password: hash,
    };

    await this.prisma.user.create({
      data,
    });

    return { mensagem: 'User created' };
  }

  async findAll() {
    const users = this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new BusinessError('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(updateUserDto.password, salt);

    const data = {
      name: updateUserDto.name,
      email: updateUserDto.email,
      role: updateUserDto.role,
      password: hash,
    };

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data,
    });

    return { mensagem: 'User updated' };
  }

  async remove(id: number) {
    const user = this.findOne(id);

    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    return { mensagem: 'user deleted' };
  }

  async isEmailUnique(email: string) {
    const isValid = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isValid) {
      throw new BusinessError('email is existing');
    }
  }
}
