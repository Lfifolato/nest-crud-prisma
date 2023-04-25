import { DtoTypes } from './dtoType';

export const DtoMensagem = (campo: string, error: number) => {
  const DtoCampo = campo.toUpperCase();

  if (error == DtoTypes.IsNotEmpty) {
    return `${DtoCampo} || deve ser informado`;
  }
  if (error == DtoTypes.IsString) {
    return `${DtoCampo} || deve ser do tipo String`;
  }
};
