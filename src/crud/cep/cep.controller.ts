import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CepService } from './cep.service';
import { CreateCepDto } from './dto/create-cep.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Cep')
@Controller('cep')
@UseGuards(AuthGuard)
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
