import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './crud/livro/livro.module';
import { CepModule } from './crud/cep/cep.module';
import { ProcessamentoModule } from './Services/processamento/processamento.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    LivroModule,
    CepModule,
    ProcessamentoModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
