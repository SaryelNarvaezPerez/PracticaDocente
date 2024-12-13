import { Curso } from "src/curso/entities/curso.entity";
import { Grado } from "src/grado/entities/grado.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GradoCurso {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Grado, grado => grado.id)
    @JoinColumn({ name: 'grado_id' })
    grado: Grado;

    @ManyToOne(() => Curso, curso => curso.id)
    @JoinColumn({ name: 'curso_id' })
    curso: Curso;
}