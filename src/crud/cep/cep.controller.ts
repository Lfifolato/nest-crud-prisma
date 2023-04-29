import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CepService } from './cep.service';
import { CreateCepDto } from './dto/create-cep.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cep')
@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Post()
  create(@Body() createCepDto: CreateCepDto) {
    return this.cepService.create(createCepDto);
  }

  @Get(':cep')
  findOne(@Param('cep') cep: string) {
    return this.cepService.findOne(cep);
  }
}
