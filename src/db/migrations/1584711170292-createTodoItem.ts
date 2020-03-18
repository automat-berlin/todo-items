import { MigrationInterface, Table, QueryRunner } from "typeorm";

export class createTodoItem1584711170292 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: "todo_items",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "description",
          type: "varchar",
        },
        {
          name: "isDone",
          type: "boolean",
        },
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("todo_items", true);
  }

}
