import { SchoolDto } from './dto/response';
import { CityEntity, KindergartenEntity, SchoolEntity } from './entities';
import { KindergartenDto } from './dto/response';

export function schoolMapper(schoolEntity: SchoolEntity): SchoolDto {
    return {
        id: schoolEntity.id,
        contacts: schoolEntity.contacts,
        translation: schoolEntity.translations[0],
        subarea: schoolEntity.subarea,
    };
}

export function kindergartenMapper(
    kindergartenEntity: KindergartenEntity,
): KindergartenDto {
    return {
        id: kindergartenEntity.id,
        contacts: kindergartenEntity.contacts,
        translation: kindergartenEntity.translations[0],
        ageGroups: kindergartenEntity.ageGroups,
        groups: kindergartenEntity.groups,
        sleepingPlaces: kindergartenEntity.sleepingPlaces,
        mealPlan: kindergartenEntity.mealPlan,
        subarea: kindergartenEntity.subarea,
    };
}

export function cityMapper(cityEntity: CityEntity) {
    return {
        id: cityEntity.id,
        name: cityEntity.translations[0]?.name,
        areas: cityEntity.areas.map((area) => ({
            id: area.id,
            name: area.translations[0]?.name,
            subareas: area.subareas.map((subarea) => ({
                id: subarea.id,
                name: subarea.translations[0]?.name,
            })),
        })),
    };
}

// export function areaMapper(areaEntity: AreaEntity) {
//     return {
//         id: areaEntity.id,
//         name: areaEntity.name,
//         translation: areaEntity.translations[0],
//         subareas: areaEntity.subareas,
//     };
// }
// export function subareaMapper(subareaEntity: SubareaEntity) {
//     return {
//         id: subareaEntity.id,
//         name: subareaEntity.name,
//         translation: subareaEntity.translations[0],
//         area: subareaEntity.area,
//     };
// }
