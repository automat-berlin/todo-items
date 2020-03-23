import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoItemDto {
  @ApiProperty({
    description: 'The name of a TodoItem',
    type: String
  })
  readonly name: string;

  @ApiProperty()
  readonly description: string;
}