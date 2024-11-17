import { IsOptional, IsUrl } from 'class-validator';

export class CreateInstitutionContactsDto {
    @IsUrl()
    @IsOptional()
    facebook?: string;

    @IsUrl()
    @IsOptional()
    instagram?: string;

    @IsUrl()
    @IsOptional()
    twitter?: string;

    @IsUrl()
    @IsOptional()
    youtube?: string;

    @IsUrl()
    @IsOptional()
    telegram?: string;

    @IsUrl()
    @IsOptional()
    whatsapp?: string;

    @IsUrl()
    @IsOptional()
    viber?: string;
}
