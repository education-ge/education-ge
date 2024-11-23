import { ContactsEntity } from '../../entities';
import { ApiProperty } from '@nestjs/swagger';
import { SubareaEntity } from '../../../cities/entities';

export class SchoolDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ type: ContactsEntity })
    contacts: ContactsEntity;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty({ type: 'string', nullable: true })
    shortDescription: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    description: string | null;

    @ApiProperty({ type: SubareaEntity })
    subarea: SubareaEntity;
}
