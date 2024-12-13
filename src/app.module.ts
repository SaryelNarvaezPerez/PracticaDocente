import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitucionModule } from './institucion/institucion.module';
import { GradoModule } from './grado/grado.module';
import { DocenteFormacionModule } from './docente-formacion/docente-formacion.module';
import { ActividadModule } from './actividad/actividad.module';
import { DocenteAsesorModule } from './docente-asesor/docente-asesor.module';
import { DocenteTutorModule } from './docente-tutor/docente-tutor.module';
import { RegistroModule } from './registro/registro.module';
import { Actividad } from './actividad/entities/actividad.entity';
import { DocenteAsesor } from './docente-asesor/entities/docente-asesor.entity';
import { DocenteFormacion } from './docente-formacion/entities/docente-formacion.entity';
import { DocenteTutor } from './docente-tutor/entities/docente-tutor.entity';
import { Grado } from './grado/entities/grado.entity';
import { Institucion } from './institucion/entities/institucion.entity';
import { Registro } from './registro/entities/registro.entity';
import { Tipo } from './tipo/entities/tipo.entity';
import { CursoModule } from './curso/curso.module';
import { Curso } from './curso/entities/curso.entity';
import { GradoCursoModule } from './grado-curso/grado-curso.module';
import { GradoCurso } from './grado-curso/entity/grado-curso.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '9932',
      database: 'practdocente',
      entities: [Actividad, DocenteAsesor, DocenteFormacion, DocenteTutor, Grado, Institucion, Registro, Tipo, Curso, GradoCurso],
      synchronize: true
    }),
    DocenteFormacionModule,
    InstitucionModule,
    GradoModule,
    ActividadModule,
    DocenteAsesorModule,
    DocenteTutorModule,
    RegistroModule,
    CursoModule,
    GradoCursoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
