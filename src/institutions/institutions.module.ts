import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    InstitutionContactsEntity,
    InstitutionTranslationEntity,
    KindergartenEntity,
    SchoolEntity,
} from './entities';

@Module({
    controllers: [InstitutionsController],
    providers: [InstitutionsService],
    imports: [
        TypeOrmModule.forFeature([
            KindergartenEntity,
            SchoolEntity,
            InstitutionContactsEntity,
            InstitutionTranslationEntity,
        ]),
    ],
})
export class InstitutionsModule {}
