import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocaleEnum } from '../../enums/locale.enum';
import { KindergartenEntity } from './kindergarten.entity';
import { SchoolEntity } from './school.entity';

@Entity({ name: 'institutions_translations' })
export class InstitutionTranslationEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column({ nullable: true })
    shortDescription?: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ type: 'enum', enum: LocaleEnum })
    locale: LocaleEnum;

    @ManyToOne(() => KindergartenEntity)
    kindergarten: KindergartenEntity;

    @ManyToOne(() => SchoolEntity)
    school: SchoolEntity;
}
