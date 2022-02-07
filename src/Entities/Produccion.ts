import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produccion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  estacion!: number;

  @Column()
  actividad!: string;

  @Column()
  cantidad!: number;
}
