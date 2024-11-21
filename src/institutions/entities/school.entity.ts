import {
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TranslationEntity } from './translation.entity';
import { ContactsEntity } from './contacts.entity';
import { SubareaEntity } from './subarea.entity';

@Entity('schools')
export class SchoolEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ContactsEntity)
    @JoinColumn()
    contacts: ContactsEntity;

    @OneToMany(() => TranslationEntity, (translation) => translation.school)
    translations: TranslationEntity[];

    @ManyToOne(() => SubareaEntity, (subarea) => subarea.schools)
    subarea: SubareaEntity;
}
