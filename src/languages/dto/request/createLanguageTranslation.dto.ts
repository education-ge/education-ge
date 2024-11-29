import { LocaleEnum } from '../../../enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageTranslationDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    locale: LocaleEnum;
}
