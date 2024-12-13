import { Module } from '@nestjs/common';
import { InstitucionService } from './institucion.service';
import { InstitucionController } from './institucion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institucion } from './entities/institucion.entity';
import { Actividad } from '../actividad/entities/actividad.entity';
import { Tipo } from '../tipo/entities/tipo.entity';
import { Registro } from '../registro/entities/registro.entity';
import { DocenteAsesor } from 'src/docente-asesor/entities/docente-asesor.entity';
import { DocenteFormacion } from 'src/docente-formacion/entities/docente-formacion.entity';
import { DocenteTutor } from 'src/docente-tutor/entities/docente-tutor.entity';
import { Grado } from 'src/grado/entities/grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institucion, DocenteTutor, DocenteAsesor, DocenteFormacion, Actividad, Grado, Tipo, Registro])],
  controllers: [InstitucionController],
  providers: [InstitucionService],
})
export class InstitucionModule {}
