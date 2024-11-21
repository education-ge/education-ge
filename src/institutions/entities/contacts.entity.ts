import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'institutions_contacts' })
export class ContactsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    facebook?: string;

    @Column({ nullable: true })
    instagram?: string;

    @Column({ nullable: true })
    twitter?: string;

    @Column({ nullable: true })
    youtube?: string;

    @Column({ nullable: true })
    telegram?: string;

    @Column({ nullable: true })
    whatsapp?: string;

    @Column({ nullable: true })
    viber?: string;
}
