import { Injectable } from '@nestjs/common';
import { CreateCepDto } from './dto/create-cep.dto';
import { PrismaService } from 'src/Services/prisma-service/prisma.service';
import { BusinessError } from 'src/@core/Errors/BusinessError';
import { GetOneDto } from './dto/get-one.dto';

@Injectable()
export class CepService {
  constructor(private prisma: PrismaService) {}

  async create(createCepDto: CreateCepDto) {
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
  }

  async findOne(Idcep: string) {
    const CepResponseDto = new GetOneDto();

    const cep = await this.prisma.cep.findUnique({
      where: {
        cep: Idcep,
      },
      include: {
        logProcessamento: {
          select: {
            codeStatus: true,
            log: true,
          },
        },
      },
    });

    if (!cep) {
      throw new BusinessError('cep not found');
    }
    if (cep.indprocessameto == 1) {
      CepResponseDto.status = 'Pending';
      CepResponseDto.id = cep.id;
      CepResponseDto.cep = cep.cep;
    } else if (cep.indprocessameto == 2) {
      CepResponseDto.status = 'Success';
      CepResponseDto.id = cep.id;
      CepResponseDto.cep = cep.cep;
      CepResponseDto.cidade = cep.cidade;
      CepResponseDto.cod_ibge = cep.cod_ibge;
      CepResponseDto.ddd = cep.ddd;
    } else {
      CepResponseDto.status = 'Error';
      CepResponseDto.id = cep.id;
      CepResponseDto.cep = cep.cep;
      CepResponseDto.logProcessamento = cep.logProcessamento;
    }

    return CepResponseDto;
  }
}
