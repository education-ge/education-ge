import { ApiProperty } from '@nestjs/swagger';

export class ContactsDto {
    @ApiProperty({ type: 'string', nullable: true })
    thumbnail: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    facebook: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    instagram: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    youtube: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    telegram: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    whatsapp: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    viber: string | null;
}
