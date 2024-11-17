import { IsOptional, IsString } from 'class-validator';

export class CreateInstitutionTranslationDto {
    @IsString()
    name_en: string;
    @IsString()
    name_ge: string;
    @IsString()
    name_ru: string;

    @IsString()
    address_en: string;
    @IsString()
    address_ge: string;
    @IsString()
    address_ru: string;

    @IsString()
    @IsOptional()
    shortDescription_en?: string;
    @IsString()
    @IsOptional()
    shortDescription_ge?: string;
    @IsString()
    @IsOptional()
    shortDescription_ru?: string;

    @IsString()
    @IsOptional()
    description_en?: string;
    @IsString()
    @IsOptional()
    description_ge?: string;
    @IsString()
    @IsOptional()
    description_ru?: string;
}
