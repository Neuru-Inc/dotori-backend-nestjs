import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class TimeExtend {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modified_at', type: 'timestamp' })
  modifiedAt: Date;
}
