import { ApiProperty } from '@nestjs/swagger';
import { ContactsDto } from './contacts.dto';
import { SubareaEntity } from '../../../cities/entities';

export class KindergartenDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ type: ContactsDto })
    contacts: ContactsDto;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty({ type: 'string', nullable: true })
    shortDescription: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    description: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    thumbnail: string | null;

    @ApiProperty({ type: 'integer', isArray: true })
    ageGroups: number[];

    @ApiProperty()
    teachersCount: number | null;

    @ApiProperty()
    groups: number;

    @ApiProperty({ type: 'string', isArray: true })
    mealPlan: string[];

    @ApiProperty()
    sleepingPlaces: boolean | null;

    @ApiProperty()
    subarea: SubareaEntity;
}
