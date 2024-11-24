import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AreaEntity } from './area.entity';
import { PlaceTranslationEntity } from './placeTranslation.entity';

@Entity('cities')
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => AreaEntity, (area) => area.city)
    areas: AreaEntity[];

    @OneToMany(() => PlaceTranslationEntity, (translation) => translation.city)
    translations: PlaceTranslationEntity[];
}
