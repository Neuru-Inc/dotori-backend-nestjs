import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genre')
export class Genre {
  @PrimaryGeneratedColumn({ name: 'genre_id', type: 'bigint' })
  id: bigint;

  @Column({ name: 'name' })
  name: string;
}
