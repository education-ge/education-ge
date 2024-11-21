import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CityEntity } from './city.entity';
import { SubareaEntity } from './subarea.entity';

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
}
