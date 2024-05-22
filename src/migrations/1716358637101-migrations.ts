import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1716358637101 implements MigrationInterface {
  name = 'Migrations1716358637101';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "password" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "sub" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "sub"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
  }
}
