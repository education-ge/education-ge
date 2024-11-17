import {
    IsBoolean,
    IsDefined,
    IsInt,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    ValidateNested,
} from 'class-validator';
import { CreateInstitutionContactsDto } from './createInstitutionContacts.dto';
import { Type } from 'class-transformer';
import { CreateInstitutionTranslationDto } from './createInstitutionTranslation.dto';

export class CreateKindergartenDto {
    @IsDefined()
    @ValidateNested()
    @Type(() => CreateInstitutionContactsDto)
    contacts: CreateInstitutionContactsDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => CreateInstitutionTranslationDto)
    translation: CreateInstitutionTranslationDto;

    @IsNumber({}, { each: true })
    ageGroups: number[];

    @IsInt()
    @Min(0)
    @IsOptional()
    teachersCount?: number;

    @IsInt()
    groups: number;

    @IsString({ each: true })
    mealPlan: string[];

    @IsBoolean()
    @IsOptional()
    sleepingPlaces?: boolean;
}
