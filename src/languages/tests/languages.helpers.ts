import { LanguageEntity } from '../entities';

export function languageMapper(languageEntity: LanguageEntity) {
    return {
        id: languageEntity.id,
        name: languageEntity.translations[0]?.name,
        code: languageEntity.code,
    };
}
