import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LocaleEnum } from '../../enums/locale.enum';

export class CreateInstitutionTranslationDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    shortDescription?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ enum: LocaleEnum })
    @IsEnum(LocaleEnum)
    locale: LocaleEnum;
}
