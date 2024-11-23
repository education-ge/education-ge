import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'institutions_contacts' })
export class ContactsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    thumbnail: string | null;

    @Column({ nullable: true })
    facebook: string | null;

    @Column({ nullable: true })
    instagram: string | null;

    @Column({ nullable: true })
    youtube: string | null;

    @Column({ nullable: true })
    telegram: string | null;

    @Column({ nullable: true })
    whatsapp: string | null;

    @Column({ nullable: true })
    viber: string | null;
}
