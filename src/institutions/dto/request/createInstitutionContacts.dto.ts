import { IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNullable } from '../../../decorators';

export class CreateInstitutionContactsDto {
    @ApiProperty({ type: 'string', nullable: true })
    @IsUrl()
    @IsNullable()
    facebook: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    @IsUrl()
    @IsNullable()
    instagram: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    @IsUrl()
    @IsNullable()
    youtube: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    @IsUrl()
    @IsNullable()
    telegram: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    @IsUrl()
    @IsNullable()
    whatsapp: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    @IsUrl()
    @IsNullable()
    viber: string | null;
}
