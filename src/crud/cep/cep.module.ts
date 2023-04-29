import { Module } from '@nestjs/common';
import { CepService } from './cep.service';
import { CepController } from './cep.controller';
import { PrismaService } from 'src/Services/prisma-service/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CepController],
  providers: [CepService, PrismaService],
  imports: [AuthModule],
})
export class CepModule {}
