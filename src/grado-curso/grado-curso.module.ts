import { Module } from '@nestjs/common';
import { GradoCursoController } from './grado-curso.controller';
import { GradoCursoService } from './grado-curso.service';

@Module({
  controllers: [GradoCursoController],
  providers: [GradoCursoService]
})
export class GradoCursoModule {}
