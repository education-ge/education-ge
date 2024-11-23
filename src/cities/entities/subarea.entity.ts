import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { AreaEntity } from './area.entity';
import { SchoolEntity } from '../../institutions/entities';
import { KindergartenEntity } from '../../institutions/entities';
import { PlaceTranslationEntity } from './placeTranslationEntity';

@Entity('institutions_subareas')
export class SubareaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => AreaEntity)
    area: AreaEntity;

    @OneToMany(() => SchoolEntity, (school) => school.subarea)
    schools: SchoolEntity[];

    @OneToMany(() => KindergartenEntity, (kindergarten) => kindergarten.subarea)
    kindergartens: KindergartenEntity[];

    @OneToMany(
        () => PlaceTranslationEntity,
        (translation) => translation.subarea,
    )
    translations: PlaceTranslationEntity[];
}
