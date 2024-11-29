import { CreateLanguageTranslationDto } from './createLanguageTranslation.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ type: CreateLanguageTranslationDto, isArray: true })
    translations: CreateLanguageTranslationDto[];
}
