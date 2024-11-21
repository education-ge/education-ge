import { SchoolDto } from './dto/response';
import { KindergartenEntity, SchoolEntity } from './entities';
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
