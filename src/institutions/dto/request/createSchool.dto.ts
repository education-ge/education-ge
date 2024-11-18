import { ApiProperty } from '@nestjs/swagger';
import { CreateInstitutionContactsDto } from './createInstitutionContacts.dto';
import { IsArray, IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateInstitutionTranslationDto } from './createInstitutionTranslation.dto';

export class CreateSchoolDto {
    @ApiProperty({ type: CreateInstitutionContactsDto })
    @IsDefined()
    @ValidateNested()
    @Type(() => CreateInstitutionContactsDto)
    contacts: CreateInstitutionContactsDto;

    @ApiProperty({ type: CreateInstitutionTranslationDto })
    @IsDefined()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateInstitutionTranslationDto)
    translations: CreateInstitutionTranslationDto[];
}
