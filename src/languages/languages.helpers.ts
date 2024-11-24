import { LanguageEntity } from './entities';
import { LanguageDto } from './dto/response';

export function languageMapper(languageEntity: LanguageEntity): LanguageDto {
    return {
        id: languageEntity.id,
        name: languageEntity.translations[0]?.name,
        code: languageEntity.code,
    };
}
