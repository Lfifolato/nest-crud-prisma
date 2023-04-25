import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DtoMensagem } from 'src/@core/DtoMensagem/createDtoMensagem';
import { DtoTypes } from 'src/@core/DtoMensagem/dtoType';

export class CreateLivroDto {
  @ApiProperty({
    description: 'nome do livro',
    default: 'TST',
  })
  @IsNotEmpty({ message: DtoMensagem('name', DtoTypes.IsNotEmpty) })
  @IsString({ message: DtoMensagem('name', DtoTypes.IsString) })
  readonly name: string;

  @ApiProperty({
    description: 'tipo do gênero do livro',
    default: 'Action',
  })
  @IsNotEmpty({ message: DtoMensagem('type', DtoTypes.IsNotEmpty) })
  @IsString({ message: DtoMensagem('type', DtoTypes.IsString) })
  readonly type: string;

  @ApiProperty({
    description: 'status do livro ativo ou inativo para venda',
    default: true,
  })
  @IsNotEmpty({ message: DtoMensagem('status', DtoTypes.IsNotEmpty) })
  @IsBoolean({ message: DtoMensagem('status', DtoTypes.IsString) })
  readonly status: boolean;

  @ApiProperty({
    description: 'Valor de venda do livro',
    default: 10.4,
  })
  @IsNotEmpty({ message: DtoMensagem('price', DtoTypes.IsNotEmpty) })
  @IsNumber({}, { message: DtoMensagem('price', DtoTypes.IsNumber) })
  readonly price: number;
}
