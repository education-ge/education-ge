import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    InstitutionContactsEntity,
    InstitutionTranslationEntity,
    KindergartenEntity,
} from './entities';
import { CreateKindergartenDto } from './dto/request';

@Injectable()
export class InstitutionsService {
    constructor(
        @InjectRepository(KindergartenEntity)
        private readonly kindergartensRepository: Repository<KindergartenEntity>,
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
            translation: await this.institutionsTranslationsRepository.save(
                createKindergartenDto.translation,
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
}
