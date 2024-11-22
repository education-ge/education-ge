import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocaleEnum } from '../../enums';
import { CityEntity } from './city.entity';
import { AreaEntity } from './area.entity';
import { SubareaEntity } from './subarea.entity';
import { Unique } from 'typeorm';

@Unique(['city', 'locale'])
@Unique(['area', 'locale'])
@Unique(['subarea', 'locale'])
@Entity('places_translations')
export class PlaceTranslationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ enum: LocaleEnum, type: 'enum' })
    locale: LocaleEnum;

    @ManyToOne(() => CityEntity)
    city: CityEntity;

    @ManyToOne(() => AreaEntity)
    area: AreaEntity;

    @ManyToOne(() => SubareaEntity)
    subarea: SubareaEntity;
}
