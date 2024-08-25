import { DataSource } from 'typeorm';
import { Task } from './model/task.entity'; // Import your entities here
import { configService } from './config/config.service';
export const AppDataSource = new DataSource(configService.getTypeOrmConfig());

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
