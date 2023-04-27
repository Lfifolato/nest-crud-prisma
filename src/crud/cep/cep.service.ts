import { Injectable } from '@nestjs/common';
import { CreateCepDto } from './dto/create-cep.dto';
import { PrismaService } from 'src/prisma-service/prisma.service';
import { BusinessError } from 'src/@core/Errors/BusinessError';

@Injectable()
export class CepService {
  constructor(private prisma: PrismaService) {}

  async create(createCepDto: CreateCepDto) {
    try {
      const iscep = await this.prisma.cep.findUnique({
        where: {
          cep: createCepDto.cep,
        },
      });

      if (iscep) {
        await this.prisma.cep.delete({
          where: {
            id: iscep.id,
          },
        });
      }

      const createCep = await this.prisma.cep.create({
        data: createCepDto,
      });

      const Dtoresponse = {
        id: createCep.id,
        cep: createCep.cep,
      };

      return Dtoresponse;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async findOne(r: string) {
    const cep = await this.prisma.cep.findUnique({
      where: {
        cep: r,
      },
    });

    if (!cep) {
      throw new BusinessError('cep not found');
    }
    if (cep.indprocessameto == 1) {
      const DtoResponse = {
        cep: cep.cep,
        status: 'Pendente processamento',
      };
      return DtoResponse;
    }
  }
}
