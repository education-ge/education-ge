import { ApiProperty } from '@nestjs/swagger';
import { LanguageDto } from '../../../languages/dto/response';

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
    languages: LanguageDto[];

    @ApiProperty({ type: 'integer', isArray: true })
    ageGroups: number[];
}
