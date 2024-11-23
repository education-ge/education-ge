import { LocaleEnum } from '../../../enums';
import { ApiProperty } from '@nestjs/swagger';

export class InstitutionTranslationDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty({ type: 'string', nullable: true })
    shortDescription: string | null;

    @ApiProperty({ type: 'string', nullable: null })
    description: string | null;

    @ApiProperty({ enum: LocaleEnum })
    locale: LocaleEnum;
}
