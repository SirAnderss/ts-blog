import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { RoleSeed } from '../seeds/roles.seed';

export class UserRoles1621102780679 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('roles').save(RoleSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //   do nothing
  }
}
