import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageEntity } from './entities';
import { LocaleEnum } from '../enums';
import { languageMapper } from './tests/languages.helpers';

@Injectable()
export class LanguagesService {
    constructor(
        @InjectRepository(LanguageEntity)
        private readonly languagesRepository: Repository<LanguageEntity>,
    ) {}

    async getLanguages(locale: LocaleEnum) {
        const languages = await this.languagesRepository
            .createQueryBuilder('institutions_language')
            .leftJoinAndSelect(
                'institutions_language.translations',
                'lt',
                'lt.locale = :locale',
                { locale },
            )
            .getMany();

        return languages.map((language) => languageMapper(language));
    }
}
