import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { DtoMensagem } from 'src/@core/DtoMensagem/createDtoMensagem';
import { DtoTypes } from 'src/@core/DtoMensagem/dtoType';

export class CreateUserDto {
  @ApiProperty({
    description: 'name ',
    default: 'Pedro Henrique',
  })
  @IsString({ message: DtoMensagem('name', DtoTypes.IsString) })
  @IsNotEmpty({ message: DtoMensagem('name', DtoTypes.IsNotEmpty) })
  name: string;

  @ApiProperty({
    description: 'Email',
    default: 'pedro@example.com',
  })
  @IsEmail({}, { message: DtoMensagem('email', DtoTypes.IsString) })
  @IsString({ message: DtoMensagem('email', DtoTypes.IsNotEmpty) })
  @IsNotEmpty({ message: DtoMensagem('email', DtoTypes.IsNotEmpty) })
  email: string;

  @ApiProperty({
    description: 'password',
    default: 'xto1010',
  })
  @IsString({ message: DtoMensagem('password', DtoTypes.IsString) })
  @IsNotEmpty({ message: DtoMensagem('password', DtoTypes.IsNotEmpty) })
  password: string;

  @ApiProperty({
    description: 'role',
    enum: ['USER', 'ADMIN'],
  })
  @IsString({ message: DtoMensagem('role', DtoTypes.IsString) })
  @IsNotEmpty({ message: DtoMensagem('role', DtoTypes.IsNotEmpty) })
  role: string;
}
