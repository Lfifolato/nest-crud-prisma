import { Module } from '@nestjs/common';
import { ProcessamentoService } from './processamento.service';
import { ProcessamentoController } from './processamento.controller';
import { HttpService } from '../http/http.service';
import { PrismaService } from '../prisma-service/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ProcessamentoController],
  providers: [ProcessamentoService, HttpService, PrismaService],
})
export class ProcessamentoModule {}
