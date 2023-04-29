import { DtoTypes } from './dtoType';

export const DtoMensagem = (campo: string, error: number) => {
  const DtoCampo = campo.toUpperCase();

  if (error == DtoTypes.IsNotEmpty) {
    return `${DtoCampo} || not empty`;
  }
  if (error == DtoTypes.IsString) {
    return `${DtoCampo} || type to String`;
  }
  if (error == DtoTypes.IsNumber) {
    return `${DtoCampo} || type to Number`;
  }
  if (error == DtoTypes.IsBoolean) {
    return `${DtoCampo} || type to boolean`;
  }
  if (error == DtoTypes.IsEmail) {
    return `${DtoCampo} || email invalid`;
  }
};
