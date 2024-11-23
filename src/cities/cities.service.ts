import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AreaEntity, CityEntity } from './entities';
import { LocaleEnum } from '../enums';
import { areaMapper, cityMapper } from './cities.helpers';

@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly citiesRepository: Repository<CityEntity>,
        @InjectRepository(AreaEntity)
        private readonly areasRepository: Repository<AreaEntity>,
    ) {}

    async getCities(locale: LocaleEnum) {
        const cities = await this.citiesRepository
            .createQueryBuilder('institutions_cities')
            .leftJoinAndSelect(
                'institutions_cities.translations',
                'ct',
                'ct.locale = :locale',
                { locale },
            )
            .getMany();
        return cities.map((city) => cityMapper(city));
    }

    async getAreas(locale: LocaleEnum, cityId: number) {
        const areas = await this.areasRepository
            .createQueryBuilder('institutions_areas')
            .leftJoinAndSelect(
                'institutions_areas.translations',
                'at',
                'at.locale = :locale',
                { locale },
            )
            .leftJoinAndSelect('institutions_areas.subareas', 'is')
            .leftJoinAndSelect('is.translations', 'st', 'st.locale = :locale')
            .leftJoin('institutions_areas.city', 'city')
            .where('city.id = :cityId', { cityId })
            .getMany();
        return areas.map((area) => areaMapper(area));
    }
}
