import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import * as moment from 'moment-timezone';

@Entity('hospitals')
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'code', nullable: false })
  code: string;

  @Column({ name: 'tag_schema', nullable: false })
  tagSchema: string;

  @Column({ name: 'address' })
  address: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    nullable: true,
    transformer: {
      to(value: Date | string | null): string {
        return value instanceof Date ? value.toISOString() : value;
      },
      from(value: string): string {
        return value ? moment(value).format() : null;
      },
    },
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    nullable: true,
    transformer: {
      to(value: Date | string | null): string {
        return value instanceof Date ? value.toISOString() : value;
      },
      from(value: string): string {
        return value ? moment(value).format() : null;
      },
    },
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    transformer: {
      to(value: Date | string | null): string {
        return value instanceof Date ? value.toISOString() : value;
      },
      from(value: string): string {
        return value ? moment(value).format() : null;
      },
    },
  })
  deletedAt: Date;
}
