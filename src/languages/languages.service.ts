import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageEntity } from './entities';
import { LocaleEnum } from '../enums';
import { languageMapper } from './languages.helpers';
import { CreateLanguageDto } from './dto/request';

@Injectable()
export class LanguagesService {
    constructor(
        @InjectRepository(LanguageEntity)
        private readonly languagesRepository: Repository<LanguageEntity>,
    ) {}

    async getLanguages(locale: LocaleEnum) {
        const languages = await this.languagesRepository
            .createQueryBuilder('languages')
            .leftJoinAndSelect(
                'languages.translations',
                'lt',
                'lt.locale = :locale',
                { locale },
            )
            .getMany();

        return languages.map((language) => languageMapper(language));
    }

    createLanguage(createLanguageDto: CreateLanguageDto) {
        const language = this.languagesRepository.create(createLanguageDto);

        return this.languagesRepository.save(language);
    }
}
