import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'institutions_translations' })
export class InstitutionTranslationEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name_en: string;
    @Column()
    name_ge: string;
    @Column()
    name_ru: string;

    @Column()
    address_en: string;
    @Column()
    address_ge: string;
    @Column()
    address_ru: string;

    @Column({ nullable: true })
    shortDescription_en?: string;
    @Column({ nullable: true })
    shortDescription_ge?: string;
    @Column({ nullable: true })
    shortDescription_ru?: string;

    @Column({ nullable: true })
    description_en?: string;
    @Column({ nullable: true })
    description_ge?: string;
    @Column({ nullable: true })
    description_ru?: string;
}
