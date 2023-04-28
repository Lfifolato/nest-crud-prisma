export class GetOneDto {
  id: number;
  cep: string;
  ddd?: string;
  cidade?: string;
  cod_ibge?: string;
  state?: string;
  address?: string;
  indprocessameto: number;
  status: string;
  createdAt: Date;
  logProcessamento: object;
}
