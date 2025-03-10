import {
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TranslationEntity } from './translation.entity';
import { ContactsEntity } from './contacts.entity';
import { SubareaEntity } from '../../cities/entities';
import { LanguageEntity } from '../../languages/entities';

@Entity('schools')
export class SchoolEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ContactsEntity)
    @JoinColumn()
    contacts: ContactsEntity;

    @OneToMany(() => TranslationEntity, (translation) => translation.school)
    translations: TranslationEntity[];

    @ManyToMany(() => LanguageEntity, (language) => language.schools)
    languages: LanguageEntity[];

    @ManyToOne(() => SubareaEntity, (subarea) => subarea.schools)
    subarea: SubareaEntity;
}
