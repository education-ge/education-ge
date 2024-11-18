import {
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { InstitutionTranslationEntity } from './institutionTranslation.entity';
import { InstitutionContactsEntity } from './institutionContacts.entity';

@Entity('schools')
export class SchoolEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => InstitutionContactsEntity)
    @JoinColumn()
    contacts: InstitutionContactsEntity;

    @OneToMany(
        () => InstitutionTranslationEntity,
        (translation) => translation.school,
    )
    translations: InstitutionTranslationEntity[];
}
