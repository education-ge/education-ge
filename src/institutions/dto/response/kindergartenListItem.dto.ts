import { ApiProperty } from '@nestjs/swagger';
import { LanguageEntity } from '../../../languages/entities';

export class KindergartenListItemDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    description: string;

    @ApiProperty({ type: 'string', nullable: true })
    thumbnail: string | null;

    @ApiProperty()
    languages: LanguageEntity[];

    @ApiProperty({ type: 'integer', isArray: true })
    ageGroups: number[];
}
