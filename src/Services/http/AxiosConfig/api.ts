import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cep.awesomeapi.com.br/json',
});
