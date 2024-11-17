import { IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstitutionContactsDto {
    @ApiProperty({ required: false })
    @IsUrl()
    @IsOptional()
    facebook?: string;

    @ApiProperty({ required: false })
    @IsUrl()
    @IsOptional()
    instagram?: string;

    @ApiProperty({ required: false })
    @IsUrl()
    @IsOptional()
    twitter?: string;

    @ApiProperty({ required: false })
    @IsUrl()
    @IsOptional()
    youtube?: string;

    @ApiProperty({ required: false })
    @IsUrl()
    @IsOptional()
    telegram?: string;

    @ApiProperty({ required: false })
    @IsUrl()
    @IsOptional()
    whatsapp?: string;

    @ApiProperty({ required: false })
    @IsUrl()
    @IsOptional()
    viber?: string;
}
