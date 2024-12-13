import { Module } from '@nestjs/common';
import { DocenteAsesorController } from './docente-asesor.controller';
import { DocenteAsesorService } from './docente-asesor.service';
import { DocenteAsesor } from './entities/docente-asesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DocenteAsesor])],
  controllers: [DocenteAsesorController],
  providers: [DocenteAsesorService]
})
export class DocenteAsesorModule {}
