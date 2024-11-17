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
import { ApiProperty } from '@nestjs/swagger';

export class CreateKindergartenDto {
    @ApiProperty({ type: CreateInstitutionContactsDto })
    @IsDefined()
    @ValidateNested()
    @Type(() => CreateInstitutionContactsDto)
    contacts: CreateInstitutionContactsDto;

    @ApiProperty({ type: CreateInstitutionTranslationDto })
    @IsDefined()
    @ValidateNested()
    @Type(() => CreateInstitutionTranslationDto)
    translation: CreateInstitutionTranslationDto;

    @ApiProperty({ type: 'integer', isArray: true })
    @IsNumber({}, { each: true })
    ageGroups: number[];

    @ApiProperty({ required: false })
    @IsInt()
    @Min(0)
    @IsOptional()
    teachersCount?: number;

    @ApiProperty()
    @IsInt()
    groups: number;

    @ApiProperty()
    @IsString({ each: true })
    mealPlan: string[];

    @ApiProperty({ required: false })
    @IsBoolean()
    @IsOptional()
    sleepingPlaces?: boolean;
}
