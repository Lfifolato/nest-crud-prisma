import { Controller, Get } from '@nestjs/common';
import { ProcessamentoService } from './processamento.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Processamento')
@Controller('processamento')
export class ProcessamentoController {
  constructor(private readonly processamentoService: ProcessamentoService) {}

  @Get()
  findAll() {
    return this.processamentoService.processamento();
  }
}
