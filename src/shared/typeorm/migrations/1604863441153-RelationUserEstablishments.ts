import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class RelationUserEstablishments1604863441153
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'establishments',
      new TableColumn({
        name: 'userid',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'establishments',
      new TableForeignKey({
        name: 'EstablishmentUser',
        columnNames: ['userid'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('establishments', 'EstablishmentUser');

    await queryRunner.dropColumn('establishments', 'userid');
  }
}
