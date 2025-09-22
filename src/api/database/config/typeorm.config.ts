import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const options = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(String(process.env.DATABASE_PORT), 10) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
    logging: true,
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: '/../migrations',
    }
  // migrations: ["src/database/migrations/*{.ts,.js}"],
  // // migrations: [__dirname + '/../migrations/**/*.ts'],
  // seeds: [InitSeeder],
  // cli: {
  //   migrationsDir : "src/database/migrations"
  // }
  
};