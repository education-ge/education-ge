import {
    ContactsEntity,
    SubareaEntity,
    TranslationEntity,
} from '../../entities';
import { ApiProperty } from '@nestjs/swagger';

export class SchoolDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ type: ContactsEntity })
    contacts: ContactsEntity;

    @ApiProperty({ type: TranslationEntity })
    translation: TranslationEntity;

    @ApiProperty({ type: SubareaEntity })
    subarea: SubareaEntity;
}
