import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactsEntity } from './contacts.entity';
import { TranslationEntity } from './translation.entity';
import { SubareaEntity } from '../../cities/entities';
import { LanguageEntity } from '../../languages/entities';

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

    @ManyToMany(() => LanguageEntity, (language) => language.kindergartens)
    languages: LanguageEntity[];

    @Column({ type: 'int', array: true })
    ageGroups: number[];

    @Column({ type: 'int', nullable: true })
    teachersCount: number | null;

    @Column({ type: 'int', nullable: true })
    groups: number;

    @Column({ type: 'varchar', array: true })
    mealPlan: string[];

    @Column({ type: 'boolean', nullable: true })
    sleepingPlaces: boolean | null;

    @ManyToOne(() => SubareaEntity, (subarea) => subarea.kindergartens)
    subarea: SubareaEntity;
}
