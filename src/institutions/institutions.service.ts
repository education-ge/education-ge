import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    ContactsEntity,
    TranslationEntity,
    KindergartenEntity,
    SchoolEntity,
} from './entities';
import { CreateKindergartenDto, CreateSchoolDto } from './dto/request';
import { LocaleEnum } from '../enums';
import {
    kindergartenListItemMapper,
    kindergartenMapper,
    schoolMapper,
} from './institutions.helpers';

@Injectable()
export class InstitutionsService {
    constructor(
        @InjectRepository(KindergartenEntity)
        private readonly kindergartensRepository: Repository<KindergartenEntity>,
        @InjectRepository(SchoolEntity)
        private readonly schoolsRepository: Repository<SchoolEntity>,
        @InjectRepository(ContactsEntity)
        private readonly institutionsContactsRepository: Repository<ContactsEntity>,
        @InjectRepository(TranslationEntity)
        private readonly institutionsTranslationsRepository: Repository<TranslationEntity>,
        // @InjectRepository(CityEntity)
        // private readonly citiesRepository: Repository<CityEntity>,
        // @InjectRepository(LanguageEntity)
        // private readonly languagesRepository: Repository<LanguageEntity>,
    ) {}
    async createKindergarten(createKindergartenDto: CreateKindergartenDto) {
        const newKindergarten = this.kindergartensRepository.create({
            ...createKindergartenDto,
            contacts: await this.institutionsContactsRepository.save(
                createKindergartenDto.contacts,
            ),
            translations: await this.institutionsTranslationsRepository.save(
                createKindergartenDto.translations,
            ),
            subarea: { id: createKindergartenDto.subareaId },
            languages: createKindergartenDto.languagesIds.map((languageId) => ({
                id: languageId,
            })),
        });

        return await this.kindergartensRepository.save(newKindergarten);
    }

    async getKindergartens(locale: LocaleEnum) {
        const kindergartens = await this.kindergartensRepository
            .createQueryBuilder('kindergartens')
            .leftJoinAndSelect(
                'kindergartens.contacts',
                'institutions_contacts',
            )
            .leftJoinAndSelect('kindergartens.subarea', 'institutions_subareas')
            .leftJoinAndSelect(
                'institutions_subareas.area',
                'institutions_areas',
            )
            .leftJoinAndSelect('institutions_areas.city', 'institutions_cities')
            .leftJoinAndSelect(
                'kindergartens.translations',
                'institutions_translations',
                'institutions_translations.locale = :locale',
                { locale },
            )
            .leftJoinAndSelect('kindergartens.languages', 'il')
            .leftJoinAndSelect(
                'il.translations',
                'lt',
                'lt.locale = :langLocale',
                { langLocale: locale },
            )
            .getMany();

        return kindergartens.map((kindergarten) =>
            kindergartenListItemMapper(kindergarten),
        );
    }

    async getKindergartenById(id: number, locale: LocaleEnum) {
        const kindergarten = await this.kindergartensRepository
            .createQueryBuilder('kindergartens')
            .leftJoinAndSelect(
                'kindergartens.contacts',
                'institutions_contacts',
            )
            .leftJoinAndSelect('kindergartens.subarea', 'institutions_subareas')
            .leftJoinAndSelect(
                'institutions_subareas.area',
                'institutions_areas',
            )
            .leftJoinAndSelect('institutions_areas.city', 'institutions_cities')

            .leftJoinAndSelect(
                'kindergartens.translations',
                'institutions_translations',
                'institutions_translations.locale = :locale',
                { locale },
            )
            .where('kindergartens.id = :id', { id })
            .getOne();

        if (!kindergarten)
            throw new NotFoundException('Kindergarten not found');

        return kindergartenMapper(kindergarten);
    }

    async createSchool(createSchoolDto: CreateSchoolDto) {
        const school = this.schoolsRepository.create({
            ...createSchoolDto,
            translations: await this.institutionsTranslationsRepository.save(
                createSchoolDto.translations,
            ),
            contacts: await this.institutionsContactsRepository.save(
                createSchoolDto.contacts,
            ),
        });

        return await this.schoolsRepository.save(school);
    }

    async getSchools(locale: LocaleEnum) {
        const schools = await this.schoolsRepository
            .createQueryBuilder('schools')
            .leftJoinAndSelect('schools.contacts', 'institutions_contacts')
            .leftJoinAndSelect(
                'schools.translations',
                'institutions_translations',
                'institutions_translations.locale = :locale',
                { locale },
            )
            .leftJoinAndSelect('schools.subarea', 'institutions_subareas')
            .leftJoinAndSelect(
                'institutions_subareas.area',
                'institutions_areas',
            )
            .leftJoinAndSelect('institutions_areas.city', 'institutions_cities')
            .getMany();

        return schools.map((school) => schoolMapper(school));
    }

    async getSchool(schoolId: number, locale: LocaleEnum) {
        const school = await this.schoolsRepository
            .createQueryBuilder('schools')
            .leftJoinAndSelect(
                'schools.translations',
                'institutions_translations',
                'institutions_translations.locale = :locale',
                { locale },
            )
            .leftJoinAndSelect('schools.contacts', 'institutions_contacts')
            .leftJoinAndSelect('schools.subarea', 'institutions_subareas')
            .leftJoinAndSelect(
                'institutions_subareas.translations',
                'st',
                'st.locale = :placeLocale',
                { placeLocale: locale },
            )
            .leftJoinAndSelect(
                'institutions_subareas.area',
                'institutions_areas',
            )
            .leftJoinAndSelect(
                'institutions_areas.translations',
                'at',
                'at.locale = :placeLocale',
                { placeLocale: locale },
            )
            .leftJoinAndSelect('institutions_areas.city', 'institutions_cities')
            .leftJoinAndSelect(
                'institutions_cities.translations',
                'ct',
                'ct.locale = :placeLocale',
                { placeLocale: locale },
            )
            .where('schools.id = :id', { id: schoolId })
            .getOne();

        if (!school) throw new NotFoundException('School not found');

        return schoolMapper(school);
    }

    // async getCities(locale: LocaleEnum) {
    //     const cities = await this.citiesRepository
    //         .createQueryBuilder('institutions_cities')
    //         .leftJoinAndSelect(
    //             'institutions_cities.areas',
    //             'institutions_areas',
    //         )
    //         .leftJoinAndSelect(
    //             'institutions_areas.translations',
    //             'areas_translations',
    //             'areas_translations.locale = :locale',
    //             { locale },
    //         )
    //         .leftJoinAndSelect(
    //             'institutions_areas.subareas',
    //             'institutions_subareas',
    //         )
    //         .leftJoinAndSelect(
    //             'institutions_subareas.translations',
    //             'subareas_translations',
    //             'subareas_translations.locale = :locale',
    //             { locale },
    //         )
    //         .leftJoinAndSelect(
    //             'institutions_cities.translations',
    //             'cities_translations',
    //             'cities_translations.locale = :locale',
    //             { locale },
    //         )
    //         .getMany();
    //
    //     return cities.map((city) => cityMapper(city));
    // }

    // getLanguages() {
    //     return this.languagesRepository.find();
    // }
}
