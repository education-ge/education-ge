import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstitutionTranslationDto {
    @ApiProperty()
    @IsString()
    name_en: string;
    @ApiProperty()
    @IsString()
    name_ge: string;
    @ApiProperty()
    @IsString()
    name_ru: string;

    @ApiProperty()
    @IsString()
    address_en: string;
    @ApiProperty()
    @IsString()
    address_ge: string;
    @ApiProperty()
    @IsString()
    address_ru: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    shortDescription_en?: string;
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    shortDescription_ge?: string;
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    shortDescription_ru?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description_en?: string;
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description_ge?: string;
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description_ru?: string;
}
