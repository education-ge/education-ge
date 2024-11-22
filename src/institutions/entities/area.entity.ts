import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CityEntity } from './city.entity';
import { SubareaEntity } from './subarea.entity';
import { TranslationEntity } from './translation.entity';
import { PlaceTranslationEntity } from './placeTranslationEntity';

@Entity('institutions_areas')
export class AreaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => CityEntity, (city) => city.areas)
    city: CityEntity;

    @OneToMany(() => SubareaEntity, (subarea) => subarea.area)
    subareas: SubareaEntity[];

    @OneToMany(() => PlaceTranslationEntity, (translation) => translation.area)
    translations: TranslationEntity[];
}
