import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Actividad } from "../../actividad/entities/actividad.entity";

@Entity()
export class Registro {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Actividad)
    @JoinColumn({ name: "actividad_id" })
    actividad: Actividad;

    @Column()
    inicioSemana: Date;

    @Column()
    finSemana: Date;

    @Column()
    firmaAsesor: string;

    @Column()
    firmaTutor: string;

    @Column()
    estado: string;
}