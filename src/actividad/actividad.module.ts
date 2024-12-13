import { Module } from '@nestjs/common';
import { ActividadController } from './actividad.controller';
import { ActividadService } from './actividad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from './entities/actividad.entity';
import { GradoCurso } from 'src/grado-curso/entity/grado-curso.entity';
import { DocenteFormacion } from 'src/docente-formacion/entities/docente-formacion.entity';
import { DocenteAsesor } from 'src/docente-asesor/entities/docente-asesor.entity';
import { DocenteTutor } from 'src/docente-tutor/entities/docente-tutor.entity';
import { Tipo } from 'src/tipo/entities/tipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actividad, GradoCurso, DocenteFormacion, DocenteTutor, DocenteAsesor, Tipo])],
  controllers: [ActividadController],
  providers: [ActividadService]
})
export class ActividadModule {}
