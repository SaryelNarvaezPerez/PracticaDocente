import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DocenteFormacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;

    @Column()
    email: string;

    @Column()
    telefono: string;

    @Column()
    rut: string;

    @Column()
    fechaIngreso: Date;

    @ManyToOne(type => Institucion)
    @JoinColumn({ name: "institucion_id" })
    institucion: Institucion;
}