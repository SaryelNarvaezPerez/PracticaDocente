import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Institucion } from '../../institucion/entities/institucion.entity';
import { GradoCurso } from "src/grado-curso/entity/grado-curso.entity";

@Entity()
export class Grado {
   @PrimaryGeneratedColumn()
   id: number;
    
   @Column()
   descripcion: number;

   @OneToMany(() => GradoCurso, gradoCurso => gradoCurso.grado)
   @JoinTable()
   cursos: GradoCurso[];
    
   @ManyToMany(() => Institucion)
   @JoinTable()
   institucion: Institucion[];
}