import {DocumentBuilder} from "@nestjs/swagger";
import { setupSwaggerDocument } from "../config/swagger";
import { configService } from "../config/config.service";

export default setupSwaggerDocument(
  "task",
  new DocumentBuilder()
    .setTitle("Task Docs")
    .setDescription("Basic task features")
    .setVersion("1.0")
    .addServer(`${configService.getValue('API_URL')}`, 'Server')
    .addTag("task")
    .build(),
);



