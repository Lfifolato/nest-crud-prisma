import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { DtoMensagem } from 'src/@core/DtoMensagem/createDtoMensagem';
import { DtoTypes } from 'src/@core/DtoMensagem/dtoType';

export class CreateCepDto {
  @ApiProperty({
    description: 'Cep ',
    default: '14090400',
  })
  @IsNotEmpty({ message: DtoMensagem('cep', DtoTypes.IsNotEmpty) })
  @IsNotEmpty({ message: DtoMensagem('cep', DtoTypes.IsString) })
  readonly cep: string;
}
