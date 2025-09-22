import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { COLUMN_BIG_INT_NULL } from './constants/db-constant-configurations';

export abstract class AuditBaseEntity extends BaseEntity  {
  /** Campos de auditoria */

  @Column({ default: true })
  status: boolean;

  @Column(COLUMN_BIG_INT_NULL)
  creation_user?: number;

  @Column(COLUMN_BIG_INT_NULL)
  user_update?: number;

  @CreateDateColumn()
  creation_date: Date;

  @Column({ default: null })
  deleted_at: Date;

  @Column({ default: null })
  created_at: Date;

  @Column({ default: null })
  updated_at: Date;

  //   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @UpdateDateColumn()
  last_update: Date;
}
