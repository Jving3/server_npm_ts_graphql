import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apodo!: string;

  @Column()
  clave!: string;
}
