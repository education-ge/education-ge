import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { InstitutionContactsEntity } from './institutionContacts.entity';
import { InstitutionTranslationEntity } from './institutionTranslation.entity';

@Entity({ name: 'kindergartens' })
export class KindergartenEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => InstitutionContactsEntity)
    @JoinColumn()
    contacts: InstitutionContactsEntity;

    @OneToMany(
        () => InstitutionTranslationEntity,
        (translation) => translation.kindergarten,
    )
    @JoinColumn()
    translations: InstitutionTranslationEntity[];

    @Column({ type: 'int', array: true })
    ageGroups: number[];

    @Column({ type: 'int', nullable: true })
    teachersCount?: number;

    @Column({ type: 'int', nullable: true })
    groups: number;

    @Column({ type: 'varchar', array: true })
    mealPlan: string[];

    @Column({ type: 'boolean', nullable: true })
    sleepingPlaces?: boolean;
}
