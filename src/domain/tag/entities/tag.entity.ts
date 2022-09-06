import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn({ name: 'tag_id', type: 'bigint' })
  id: bigint;

  @Column({ name: 'name', unique: true })
  name: string;
}
