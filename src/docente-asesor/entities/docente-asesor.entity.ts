import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DocenteAsesor {
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

    @OneToOne(type => Institucion)
    @JoinColumn({ name: "institucion_id" })
    institucion: Institucion;
}