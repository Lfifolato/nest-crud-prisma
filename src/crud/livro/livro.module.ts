import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { PrismaService } from 'src/prisma-service/prisma.service';

@Module({
  controllers: [LivroController],
  providers: [LivroService, PrismaService],
})
export class LivroModule {}
