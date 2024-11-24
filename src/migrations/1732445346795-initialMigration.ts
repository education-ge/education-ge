import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1732445346795 implements MigrationInterface {
    name = 'InitialMigration1732445346795';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "institutions_contacts" ("id" SERIAL NOT NULL, "thumbnail" character varying, "facebook" character varying, "instagram" character varying, "youtube" character varying, "telegram" character varying, "whatsapp" character varying, "viber" character varying, CONSTRAINT "PK_e4c9f1b21a5a2f82e90f9c91fda" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."places_translations_locale_enum" AS ENUM('en', 'ge', 'ru')`,
        );
        await queryRunner.query(
            `CREATE TABLE "places_translations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "locale" "public"."places_translations_locale_enum" NOT NULL, "cityId" integer, "areaId" integer, "subareaId" integer, CONSTRAINT "UQ_0817af32cf820936d8c3977dc22" UNIQUE ("subareaId", "locale"), CONSTRAINT "UQ_89d28055d413dd13a73b6c3624d" UNIQUE ("areaId", "locale"), CONSTRAINT "UQ_9a9169295b32015959ccff2279f" UNIQUE ("cityId", "locale"), CONSTRAINT "PK_9c02b824e11407b70b5bcda9381" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "subareas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "areaId" integer, CONSTRAINT "PK_5580e333ff16cc02774992e30af" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "areas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "cityId" integer, CONSTRAINT "PK_5110493f6342f34c978c084d0d6" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "cities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "schools" ("id" SERIAL NOT NULL, "contactsId" integer, "subareaId" integer, CONSTRAINT "REL_18d2d66ef7e216ad51069ebd8b" UNIQUE ("contactsId"), CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."institutions_translations_locale_enum" AS ENUM('en', 'ge', 'ru')`,
        );
        await queryRunner.query(
            `CREATE TABLE "institutions_translations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "shortDescription" character varying, "description" character varying, "locale" "public"."institutions_translations_locale_enum" NOT NULL, "kindergartenId" integer, "schoolId" integer, CONSTRAINT "UQ_c1740c112da66dc311a95f1f647" UNIQUE ("kindergartenId", "locale"), CONSTRAINT "UQ_955a2dc2c512716ee552debeb03" UNIQUE ("schoolId", "locale"), CONSTRAINT "PK_efa4291e5b994884162e1dc3671" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "kindergartens" ("id" SERIAL NOT NULL, "ageGroups" integer array NOT NULL, "teachersCount" integer, "groups" integer, "mealPlan" character varying array NOT NULL, "sleepingPlaces" boolean, "contactsId" integer, "subareaId" integer, CONSTRAINT "REL_b4608b6415f688cb653ea22733" UNIQUE ("contactsId"), CONSTRAINT "PK_ca1dbb46fec45be055fd3e49708" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."languages_code_enum" AS ENUM('en', 'ge', 'ru')`,
        );
        await queryRunner.query(
            `CREATE TABLE "languages" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" "public"."languages_code_enum" NOT NULL, CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TYPE "public"."languages_translations_locale_enum" AS ENUM('en', 'ge', 'ru')`,
        );
        await queryRunner.query(
            `CREATE TABLE "languages_translations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "locale" "public"."languages_translations_locale_enum" NOT NULL, "languageId" integer, CONSTRAINT "PK_f9a7da81520504ff086a24f45e0" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "languages_kindergartens_kindergartens" ("languagesId" integer NOT NULL, "kindergartensId" integer NOT NULL, CONSTRAINT "PK_eaa44014b44526990312094b827" PRIMARY KEY ("languagesId", "kindergartensId"))`,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_3030d80ee39263d460442470c4" ON "languages_kindergartens_kindergartens" ("languagesId") `,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_262d8463b41f34b88e142dc2c2" ON "languages_kindergartens_kindergartens" ("kindergartensId") `,
        );
        await queryRunner.query(
            `ALTER TABLE "places_translations" ADD CONSTRAINT "FK_2da90470184769a56a2ffb7ef12" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "places_translations" ADD CONSTRAINT "FK_aab88adeff4bbc66f8488797797" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "places_translations" ADD CONSTRAINT "FK_1568a6393d153b45bd5182178c3" FOREIGN KEY ("subareaId") REFERENCES "subareas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "subareas" ADD CONSTRAINT "FK_c3949e83a7e0d6bfc602db80049" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "areas" ADD CONSTRAINT "FK_56145036ce252af4f8e62631ed0" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "schools" ADD CONSTRAINT "FK_18d2d66ef7e216ad51069ebd8ba" FOREIGN KEY ("contactsId") REFERENCES "institutions_contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "schools" ADD CONSTRAINT "FK_a7cb43f694e4a31af9a842c0c97" FOREIGN KEY ("subareaId") REFERENCES "subareas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "institutions_translations" ADD CONSTRAINT "FK_aa88165737540209f9914a76453" FOREIGN KEY ("kindergartenId") REFERENCES "kindergartens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "institutions_translations" ADD CONSTRAINT "FK_42389bf4742be017e7365e9fc35" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "kindergartens" ADD CONSTRAINT "FK_b4608b6415f688cb653ea227336" FOREIGN KEY ("contactsId") REFERENCES "institutions_contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "kindergartens" ADD CONSTRAINT "FK_d5e61cd289bb243b4298c7d0d29" FOREIGN KEY ("subareaId") REFERENCES "subareas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "languages_translations" ADD CONSTRAINT "FK_3e20fb13288f420b05cbcf52752" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "languages_kindergartens_kindergartens" ADD CONSTRAINT "FK_3030d80ee39263d460442470c4c" FOREIGN KEY ("languagesId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE "languages_kindergartens_kindergartens" ADD CONSTRAINT "FK_262d8463b41f34b88e142dc2c2b" FOREIGN KEY ("kindergartensId") REFERENCES "kindergartens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "languages_kindergartens_kindergartens" DROP CONSTRAINT "FK_262d8463b41f34b88e142dc2c2b"`,
        );
        await queryRunner.query(
            `ALTER TABLE "languages_kindergartens_kindergartens" DROP CONSTRAINT "FK_3030d80ee39263d460442470c4c"`,
        );
        await queryRunner.query(
            `ALTER TABLE "languages_translations" DROP CONSTRAINT "FK_3e20fb13288f420b05cbcf52752"`,
        );
        await queryRunner.query(
            `ALTER TABLE "kindergartens" DROP CONSTRAINT "FK_d5e61cd289bb243b4298c7d0d29"`,
        );
        await queryRunner.query(
            `ALTER TABLE "kindergartens" DROP CONSTRAINT "FK_b4608b6415f688cb653ea227336"`,
        );
        await queryRunner.query(
            `ALTER TABLE "institutions_translations" DROP CONSTRAINT "FK_42389bf4742be017e7365e9fc35"`,
        );
        await queryRunner.query(
            `ALTER TABLE "institutions_translations" DROP CONSTRAINT "FK_aa88165737540209f9914a76453"`,
        );
        await queryRunner.query(
            `ALTER TABLE "schools" DROP CONSTRAINT "FK_a7cb43f694e4a31af9a842c0c97"`,
        );
        await queryRunner.query(
            `ALTER TABLE "schools" DROP CONSTRAINT "FK_18d2d66ef7e216ad51069ebd8ba"`,
        );
        await queryRunner.query(
            `ALTER TABLE "areas" DROP CONSTRAINT "FK_56145036ce252af4f8e62631ed0"`,
        );
        await queryRunner.query(
            `ALTER TABLE "subareas" DROP CONSTRAINT "FK_c3949e83a7e0d6bfc602db80049"`,
        );
        await queryRunner.query(
            `ALTER TABLE "places_translations" DROP CONSTRAINT "FK_1568a6393d153b45bd5182178c3"`,
        );
        await queryRunner.query(
            `ALTER TABLE "places_translations" DROP CONSTRAINT "FK_aab88adeff4bbc66f8488797797"`,
        );
        await queryRunner.query(
            `ALTER TABLE "places_translations" DROP CONSTRAINT "FK_2da90470184769a56a2ffb7ef12"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_262d8463b41f34b88e142dc2c2"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_3030d80ee39263d460442470c4"`,
        );
        await queryRunner.query(
            `DROP TABLE "languages_kindergartens_kindergartens"`,
        );
        await queryRunner.query(`DROP TABLE "languages_translations"`);
        await queryRunner.query(
            `DROP TYPE "public"."languages_translations_locale_enum"`,
        );
        await queryRunner.query(`DROP TABLE "languages"`);
        await queryRunner.query(`DROP TYPE "public"."languages_code_enum"`);
        await queryRunner.query(`DROP TABLE "kindergartens"`);
        await queryRunner.query(`DROP TABLE "institutions_translations"`);
        await queryRunner.query(
            `DROP TYPE "public"."institutions_translations_locale_enum"`,
        );
        await queryRunner.query(`DROP TABLE "schools"`);
        await queryRunner.query(`DROP TABLE "cities"`);
        await queryRunner.query(`DROP TABLE "areas"`);
        await queryRunner.query(`DROP TABLE "subareas"`);
        await queryRunner.query(`DROP TABLE "places_translations"`);
        await queryRunner.query(
            `DROP TYPE "public"."places_translations_locale_enum"`,
        );
        await queryRunner.query(`DROP TABLE "institutions_contacts"`);
    }
}
