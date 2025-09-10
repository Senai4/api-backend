import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAndProductRelation1757527123538 implements MigrationInterface {
    name = 'UserAndProductRelation1757527123538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }

}
