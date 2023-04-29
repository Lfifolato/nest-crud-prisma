import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './crud/livro/livro.module';
import { CepModule } from './crud/cep/cep.module';
import { ProcessamentoModule } from './Services/processamento/processamento.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './crud/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AuthModule,
    LivroModule,
    CepModule,
    ProcessamentoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
