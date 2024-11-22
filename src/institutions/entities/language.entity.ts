import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LocaleEnum } from '../../enums';
import { SchoolEntity } from './school.entity';
import { KindergartenEntity } from './kindergarten.entity';

@Entity('institutions_language')
export class LanguageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: LocaleEnum })
    code: LocaleEnum;

    @ManyToMany(() => SchoolEntity)
    schools: SchoolEntity[];

    @ManyToMany(
        () => KindergartenEntity,
        (kindergarten) => kindergarten.languages,
    )
    kindergartens: KindergartenEntity[];
}
