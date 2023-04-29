import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProcessamentoService } from './processamento.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Processamento')
@Controller('processamento')
@UseGuards(AuthGuard)
export class ProcessamentoController {
  constructor(private readonly processamentoService: ProcessamentoService) {}

  @Get()
  findAll() {
    return this.processamentoService.processamento();
  }
}
