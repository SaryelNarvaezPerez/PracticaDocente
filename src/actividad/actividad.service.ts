import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actividad } from './entities/actividad.entity';
import { ActividadDTO } from './dto/actividad.dto';
import { GradoCurso } from 'src/grado-curso/entity/grado-curso.entity';
import { DocenteFormacion } from 'src/docente-formacion/entities/docente-formacion.entity';
import { DocenteTutor } from 'src/docente-tutor/entities/docente-tutor.entity';
import { DocenteAsesor } from 'src/docente-asesor/entities/docente-asesor.entity';
import { Tipo } from 'src/tipo/entities/tipo.entity';

@Injectable()
export class ActividadService {
    constructor(
        @InjectRepository(Actividad)
        private actividadRepository: Repository<Actividad>,
        @InjectRepository(GradoCurso)
        private gradoCursoRepository: Repository<GradoCurso>,
        @InjectRepository(DocenteFormacion)
        private docenteFormacionRepository: Repository<DocenteFormacion>,
        @InjectRepository(DocenteTutor)
        private docenteTutorRepository: Repository<DocenteTutor>,
        @InjectRepository(DocenteAsesor)
        private docenteAsesorRepository: Repository<DocenteAsesor>,
        @InjectRepository(Tipo)
        private tipoRepository: Repository<Tipo>
    ) { }

    async create(actividad: ActividadDTO) {
        const newActividad: Actividad = new Actividad();
        newActividad.tema = actividad.tema;
        newActividad.fecha = actividad.fecha;
        newActividad.horaInicio = actividad.horaInicio;
        newActividad.horaFin = actividad.horaFin;
        newActividad.noHoras = actividad.noHoras;

        const gradoCurso: GradoCurso = await this.gradoCursoRepository.findOneBy({ id: actividad.gradoCurso });
        newActividad.gradoCurso = gradoCurso;

        const docenteFormacion: DocenteFormacion = await this.docenteFormacionRepository.findOneBy({ id: actividad.docenteFormacion });
        newActividad.docenteFormacion = docenteFormacion;

        const docenteTutor: DocenteTutor = await this.docenteTutorRepository.findOneBy({ id: actividad.docenteTutor });
        newActividad.docenteTutor = docenteTutor;

        const docenteAsesor: DocenteAsesor = await this.docenteAsesorRepository.findOneBy({ id: actividad.docenteAsesor });
        newActividad.docenteAsesor = docenteAsesor;

        const tipo: Tipo = await this.tipoRepository.findOneBy({ id: actividad.tipo });
        newActividad.tipo = tipo;

        return await this.actividadRepository.save(newActividad);
    }

    async findAll() {
        return await this.actividadRepository.find();
    }

    async findOne(id: number) {
        return await this.actividadRepository.findOneBy({ id: id });
    }

    async update(id: number, actividad: Actividad) {
        return await this.actividadRepository.update(id, actividad);
    }

    async remove(id: number) {
        return await this.actividadRepository.delete(id);
    }

    /* async findByGrado(gradoId: number) {
        return await this.actividadRepository.find({ where: { gradoGrupo: gradoId } });
    } */
}
