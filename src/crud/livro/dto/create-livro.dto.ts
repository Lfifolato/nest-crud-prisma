import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { DtoMensagem } from 'src/@core/DtoMensagem/createDtoMensagem';
import { DtoTypes } from 'src/@core/DtoMensagem/dtoType';

export class CreateLivroDto {
  @IsNotEmpty({ message: DtoMensagem('name', DtoTypes.IsNotEmpty) })
  @IsString({ message: DtoMensagem('name', DtoTypes.IsString) })
  readonly name: string;

  @IsNotEmpty({ message: DtoMensagem('type', DtoTypes.IsNotEmpty) })
  @IsString({ message: DtoMensagem('type', DtoTypes.IsString) })
  readonly type: string;

  @IsNotEmpty({ message: DtoMensagem('status', DtoTypes.IsNotEmpty) })
  @IsBoolean({ message: DtoMensagem('status', DtoTypes.IsString) })
  readonly status: boolean;

  @IsNotEmpty({ message: DtoMensagem('price', DtoTypes.IsNotEmpty) })
  @IsNumber({}, { message: DtoMensagem('price', DtoTypes.IsNumber) })
  readonly price: number;
}
