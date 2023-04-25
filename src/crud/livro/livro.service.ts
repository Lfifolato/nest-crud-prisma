import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { PrismaService } from 'src/prisma-service/prisma.service';
import { BusinessError } from 'src/@core/Errors/BusinessError';

@Injectable()
export class LivroService {
  constructor(private prisma: PrismaService) {}

  async create(createLivroDto: CreateLivroDto) {
    const newLivro = await this.prisma.livros.create({
      data: createLivroDto,
    });

    return newLivro;
  }

  async findAll() {
    const livros = await this.prisma.livros.findMany();
    return livros;
  }

  async findOne(id: string) {
    const livro = await this.prisma.livros.findUnique({
      where: {
        id: id,
      },
    });

    if (!livro) {
      throw new BusinessError('id not found');
    }

    return livro;
  }

  async update(id: string, updateLivroDto: UpdateLivroDto) {
    const livro = await this.findOne(id);

    const livroUpdate = await this.prisma.livros.update({
      where: {
        id: livro.id,
      },
      data: updateLivroDto,
    });

    return livroUpdate;
  }

  async remove(id: string) {
    const livro = await this.findOne(id);

    await this.prisma.livros.delete({
      where: {
        id: livro.id,
      },
    });

    return;
  }
}
