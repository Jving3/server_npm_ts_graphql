import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autostore extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  DateTime!: string;

  @Column()
  Type!: string;

  @Column()
  Message!: string;
}