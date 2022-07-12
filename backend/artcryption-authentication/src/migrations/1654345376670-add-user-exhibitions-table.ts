import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserExhibitionsTable1654345376670
  implements MigrationInterface
{
  name = 'addUserExhibitionsTable1654345376670';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_exhibitions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(250) NOT NULL, "galary" character varying(250) NOT NULL, "url" character varying(250) NOT NULL, "month" integer NOT NULL, "year" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_id" uuid NOT NULL, CONSTRAINT "PK_d1a5f60f224b025035130ebb4a5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_exhibitions" ADD CONSTRAINT "FK_22e2a94cff0395c47d1973746ed" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_exhibitions" DROP CONSTRAINT "FK_22e2a94cff0395c47d1973746ed"`,
    );
    await queryRunner.query(`DROP TABLE "user_exhibitions"`);
  }
}
