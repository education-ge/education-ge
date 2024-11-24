import { LocaleEnum } from '../../../enums';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty({ enum: LocaleEnum })
    code: LocaleEnum;
}
