import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { LocaleEnum } from '../../enums';
import { KindergartenEntity } from './kindergarten.entity';
import { SchoolEntity } from './school.entity';

@Unique(['school', 'locale'])
@Unique(['kindergarten', 'locale'])
@Entity({ name: 'institutions_translations' })
export class TranslationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column({ nullable: true })
    shortDescription: string | null;

    @Column({ nullable: true })
    description: string | null;

    @Column({ type: 'enum', enum: LocaleEnum })
    locale: LocaleEnum;

    @ManyToOne(() => KindergartenEntity)
    kindergarten: KindergartenEntity;

    @ManyToOne(() => SchoolEntity)
    school: SchoolEntity;
}
