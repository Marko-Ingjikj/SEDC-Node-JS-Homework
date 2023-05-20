import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 2, nullable: false })
  name: string;

  @Column({ nullable: false })
  age: number;

  @Column({ nullable: false })
  location: string;

  @Column({ length: 1, nullable: false })
  gender: string;

  @Column({ type: 'jsonb', nullable: false })
  characteristics: {
    food?: string[];
    colour?: string;
    isDangerous?: boolean;
    weight?: number;
    enclosure?: string;
  };

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
