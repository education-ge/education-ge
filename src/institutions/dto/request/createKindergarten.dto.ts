import {
    IsArray,
    IsBoolean,
    IsDefined,
    IsInt,
    IsNumber,
    IsString,
    Min,
    ValidateNested,
} from 'class-validator';
import { CreateInstitutionContactsDto } from './createInstitutionContacts.dto';
import { Type } from 'class-transformer';
import { CreateInstitutionTranslationDto } from './createInstitutionTranslation.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNullable } from '../../../decorators';

export class CreateKindergartenDto {
    @ApiProperty({ type: CreateInstitutionContactsDto })
    @IsDefined()
    @ValidateNested()
    @Type(() => CreateInstitutionContactsDto)
    contacts: CreateInstitutionContactsDto;

    @ApiProperty({ type: CreateInstitutionTranslationDto, isArray: true })
    @IsDefined()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateInstitutionTranslationDto)
    translations: CreateInstitutionTranslationDto[];

    @ApiProperty({ type: 'integer', isArray: true })
    @IsInt({ each: true })
    @Min(1, { each: true })
    languagesIds: number[];

    @ApiProperty({ type: 'integer', isArray: true })
    @IsNumber({}, { each: true })
    ageGroups: number[];

    @ApiProperty({ required: false })
    @IsInt()
    @Min(0)
    @IsNullable()
    teachersCount: number | null;

    @ApiProperty()
    @IsInt()
    groups: number;

    @ApiProperty()
    @IsString({ each: true })
    mealPlan: string[];

    @ApiProperty({ nullable: true })
    @IsBoolean()
    @IsNullable()
    sleepingPlaces: boolean | null;

    @ApiProperty()
    @IsInt()
    @Min(1)
    subareaId: number;
}
