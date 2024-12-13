import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tipo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;
}