import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1714033494698 implements MigrationInterface {
  name = 'Migrations1714033494698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "hospitals" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL, "tag_schema" character varying NOT NULL, "address" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_02738c80d71453bc3e369a01766" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "hospitals"`);
  }
}
