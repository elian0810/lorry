import { AuditBaseEntity } from 'src/common/db/base.entity';
import { COLUMN_ONE_TO_ONE } from 'src/common/db/constants/db-constant-configurations';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'categories' })
export class Category extends AuditBaseEntity {
  @Column(COLUMN_ONE_TO_ONE)
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;
}

