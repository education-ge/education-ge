import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactsEntity } from './contacts.entity';
import { TranslationEntity } from './translation.entity';
import { SubareaEntity } from './subarea.entity';

@Entity({ name: 'kindergartens' })
export class KindergartenEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ContactsEntity)
    @JoinColumn()
    contacts: ContactsEntity;

    @OneToMany(
        () => TranslationEntity,
        (translation) => translation.kindergarten,
    )
    @JoinColumn()
    translations: TranslationEntity[];

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

    @ManyToOne(() => SubareaEntity, (subarea) => subarea.kindergartens)
    subarea: SubareaEntity;
}
