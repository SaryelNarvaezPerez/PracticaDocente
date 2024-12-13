import { DocenteFormacion } from "src/docente-formacion/entities/docente-formacion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    nit: string;
    
    @Column()
    email: string;
  
    @Column()
    celular: string;
  
    @OneToMany(() => DocenteFormacion, (docenteFormacion) => docenteFormacion.institucion)
    docenteformacion: DocenteFormacion[]
}

