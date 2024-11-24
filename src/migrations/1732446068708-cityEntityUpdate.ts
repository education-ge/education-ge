import { MigrationInterface, QueryRunner } from 'typeorm';

export class CityEntityUpdate1732446068708 implements MigrationInterface {
    name = 'CityEntityUpdate1732446068708';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "cities" ADD "name" character varying NOT NULL`,
        );
    }
}
