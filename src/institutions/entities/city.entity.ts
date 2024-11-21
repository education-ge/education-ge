import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AreaEntity } from './area.entity';

@Entity('institutions_cities')
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => AreaEntity, (area) => area.city)
    areas: AreaEntity[];
}
