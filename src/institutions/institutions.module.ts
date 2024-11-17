import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    InstitutionContactsEntity,
    InstitutionTranslationEntity,
    KindergartenEntity,
} from './entities';

@Module({
    controllers: [InstitutionsController],
    providers: [InstitutionsService],
    imports: [
        TypeOrmModule.forFeature([
            KindergartenEntity,
            InstitutionContactsEntity,
            InstitutionTranslationEntity,
        ]),
    ],
})
export class InstitutionsModule {}
