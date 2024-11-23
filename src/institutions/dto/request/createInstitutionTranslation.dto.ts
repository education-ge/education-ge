import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LocaleEnum } from '../../../enums';
import { IsNullable } from '../../../decorators';

export class CreateInstitutionTranslationDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty({ nullable: true })
    @IsString()
    @IsNullable()
    shortDescription: string | null;

    @ApiProperty({ nullable: true })
    @IsString()
    @IsNullable()
    description: string | null;

    @ApiProperty({ enum: LocaleEnum })
    @IsEnum(LocaleEnum)
    locale: LocaleEnum;
}
