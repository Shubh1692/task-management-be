import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class TaskDto {
    @ApiProperty({ example: "Task title", required: true })
    @IsString()
    readonly title!: string;
  
    @ApiProperty({ example: "Task description", required: false  })
    @IsString()
    readonly description!: string;
  }