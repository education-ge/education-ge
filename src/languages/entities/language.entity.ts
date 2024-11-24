import {
    Column,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { LocaleEnum } from '../../enums';
import { SchoolEntity } from '../../institutions/entities';
import { KindergartenEntity } from '../../institutions/entities';
import { JoinTable } from 'typeorm';
import { LanguageTranslationEntity } from './languageTranslation.entity';

@Entity('languages')
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
    @JoinTable()
    kindergartens: KindergartenEntity[];

    @OneToMany(
        () => LanguageTranslationEntity,
        (translation) => translation.language,
    )
    translations: LanguageTranslationEntity[];
}
