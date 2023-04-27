import { Controller, Get } from '@nestjs/common';
import { ProcessamentoService } from './processamento.service';

@Controller('processamento')
export class ProcessamentoController {
  constructor(private readonly processamentoService: ProcessamentoService) {}

  @Get()
  findAll() {
    return this.processamentoService.processamento();
  }
}
