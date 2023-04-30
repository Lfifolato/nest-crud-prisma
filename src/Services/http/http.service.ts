import { Injectable } from '@nestjs/common';
import { api } from './AxiosConfig/api';

@Injectable()
export class HttpService {
  async getApi(cep) {
    try {
      const { data } = await api.get(cep);
      return data;
    } catch (error: any) {
      const DtoErro = {
        status: 'Error',
        log: error.message,
      };
      //ds
      return DtoErro;
    }
  }
}
