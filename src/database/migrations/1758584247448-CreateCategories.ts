import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategories1758584247448 implements MigrationInterface {
    name = 'CreateCategories1758584247448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("status" boolean NOT NULL DEFAULT true, "creation_user" bigint, "user_update" bigint, "creation_date" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "last_update" TIMESTAMP NOT NULL DEFAULT now(), "id" BIGSERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
