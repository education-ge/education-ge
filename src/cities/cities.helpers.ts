import { AreaEntity, CityEntity } from './entities';

export function cityMapper(cityEntity: CityEntity) {
    return {
        id: cityEntity.id,
        name: cityEntity.translations[0]?.name,
    };
}

export function areaMapper(areaEntity: AreaEntity) {
    return {
        id: areaEntity.id,
        name: areaEntity.translations[0]?.name,
        subareas: areaEntity.subareas.map((subarea) => ({
            id: subarea.id,
            name: subarea.translations[0]?.name,
        })),
    };
}
