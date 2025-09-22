import { ConfigModule } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  logging: true,
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
};

export const AppDataSource = new DataSource(options);
