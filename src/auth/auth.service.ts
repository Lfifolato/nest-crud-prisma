import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PrismaService } from 'src/Services/prisma-service/prisma.service';
import { BusinessError } from 'src/@core/Errors/BusinessError';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  private issuer = 'Api_Nest';
  private audience = 'user_login';

  constructor(private JwtService: JwtService, private prisma: PrismaService) {}

  async login(loginDto: LoginAuthDto) {
    const user = await this.findByEmail(loginDto.email);

    const isMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!isMatch) {
      throw new BusinessError('password incorrect');
    }

    const token = await this.createToken(user);

    return token;
  }

  async createToken(user: User) {
    const token = this.JwtService.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      {
        expiresIn: '1 days',
        subject: String(user.id),
        issuer: this.issuer,
        audience: this.audience,
      },
    );

    return { accessToken: token };
  }

  async isValidToken(token: string) {
    try {
      const data = this.JwtService.verify(token, {
        issuer: this.issuer,
        audience: this.audience,
      });

      return true;
    } catch (e) {
      return false;
    }
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new BusinessError('email not found');
    }

    return user;
  }
}
