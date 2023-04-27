import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './crud/livro/livro.module';
import { CepModule } from './crud/cep/cep.module';

@Module({
  imports: [LivroModule, CepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
