import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    InstitutionContactsEntity,
    InstitutionTranslationEntity,
    KindergartenEntity,
    SchoolEntity,
} from './entities';
import { CreateKindergartenDto, CreateSchoolDto } from './dto/request';

@Injectable()
export class InstitutionsService {
    constructor(
        @InjectRepository(KindergartenEntity)
        private readonly kindergartensRepository: Repository<KindergartenEntity>,
        @InjectRepository(SchoolEntity)
        private readonly schoolsRepository: Repository<SchoolEntity>,
        @InjectRepository(InstitutionContactsEntity)
        private readonly institutionsContactsRepository: Repository<InstitutionContactsEntity>,
        @InjectRepository(InstitutionTranslationEntity)
        private readonly institutionsTranslationsRepository: Repository<InstitutionTranslationEntity>,
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
        });

        return await this.kindergartensRepository.save(newKindergarten);
    }

    getKindergartens() {
        return this.kindergartensRepository.find({ relations: ['contacts'] });
    }

    async getKindergartenById(id: number) {
        const kindergarten = await this.kindergartensRepository.findOne({
            where: { id },
            relations: ['contacts'],
        });

        if (!kindergarten)
            throw new NotFoundException('Kindergarten not found');

        return kindergarten;
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

    getSchools() {
        return this.schoolsRepository.find({
            relations: ['contacts', 'translations'],
        });
    }

    async getSchool(schoolId: number) {
        const school = await this.schoolsRepository.findOne({
            where: { id: schoolId },
            relations: ['contacts', 'translations'],
        });

        if (!school) throw new NotFoundException('School not found');

        return school;
    }
}
