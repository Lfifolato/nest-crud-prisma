import { Module } from '@nestjs/common';
import { ProcessamentoService } from './processamento.service';
import { ProcessamentoController } from './processamento.controller';
import { HttpService } from '../http/http.service';
import { PrismaService } from '../prisma-service/prisma.service';

@Module({
  controllers: [ProcessamentoController],
  providers: [ProcessamentoService, HttpService, PrismaService],
})
export class ProcessamentoModule {}
