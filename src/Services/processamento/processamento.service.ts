import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '../http/http.service';
import { PrismaService } from '../prisma-service/prisma.service';
import { Cep } from 'src/crud/cep/entities/cep.entity';
import { HttpResponse } from './@Type/httpDto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ProcessamentoService {
  constructor(private http: HttpService, private prisma: PrismaService) {}
  private readonly logger = new Logger();

  // @Cron(CronExpression.EVERY_5_MINUTES)
  async processamento() {
    this.logger.debug('Cron Job execution');
    const ceps = await this.buscaCepPendente();

    for (const item of ceps) {
      const res: HttpResponse = await this.http.getApi(item.cep);

      if (!res.status == undefined) {
        await this.salvaLogProcessamento(res, item, '200');
        await this.AtualizaCep(res, item, '200');
      } else {
        await this.salvaLogProcessamento(res, item, '404');
        await this.AtualizaCep(res, item, '404');
      }
    }
    const data = {
      status: 'ok',
      mensagem: 'Cep processamento com sucesso',
    };
    return data;
  }

  async buscaCepPendente() {
    const data = await this.prisma.cep.findMany({
      where: {
        indprocessameto: 1,
      },
    });

    return data;
  }

  async salvaLogProcessamento(http: any, DtoCep: Cep, status: string) {
    if (status == '200') {
      await this.prisma.logProcessamento.create({
        data: {
          codeStatus: '200',
          cepId: DtoCep.id,
          log: http,
        },
      });
      return;
    }

    await this.prisma.logProcessamento.create({
      data: {
        codeStatus: '404',
        cepId: DtoCep.id,
        log: http,
      },
    });

    return;
  }

  async AtualizaCep(http: HttpResponse, DtoCep: Cep, status: string) {
    if (status == '200') {
      await this.prisma.cep.update({
        where: {
          id: DtoCep.id,
        },
        data: {
          indprocessameto: 2,
          cidade: http.city,
          cod_ibge: http.city_ibge,
          ddd: http.ddd,
          address: http.address,
          state: http.state,
        },
      });
      return;
    } else {
      await this.prisma.cep.update({
        where: {
          id: DtoCep.id,
        },
        data: {
          indprocessameto: 3,
        },
      });
      return;
    }
  }
}
