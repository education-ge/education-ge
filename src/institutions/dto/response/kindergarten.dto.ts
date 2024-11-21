import {
    ContactsEntity,
    SubareaEntity,
    TranslationEntity,
} from '../../entities';
import { ApiProperty } from '@nestjs/swagger';

export class KindergartenDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    contacts: ContactsEntity;

    @ApiProperty()
    translation: TranslationEntity;

    @ApiProperty({ type: 'integer', isArray: true })
    ageGroups: number[];

    @ApiProperty({ required: false })
    teachersCount?: number;

    @ApiProperty()
    groups: number;

    @ApiProperty({ type: 'string', isArray: true })
    mealPlan: string[];

    @ApiProperty({ required: false })
    sleepingPlaces?: boolean;

    @ApiProperty()
    subarea: SubareaEntity;
}
