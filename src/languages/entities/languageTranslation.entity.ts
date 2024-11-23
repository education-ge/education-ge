import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocaleEnum } from '../../enums';
import { LanguageEntity } from './language.entity';

@Entity('languages_translations')
export class LanguageTranslationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: LocaleEnum })
    locale: LocaleEnum;

    @ManyToOne(() => LanguageEntity)
    language: LanguageEntity;
}
