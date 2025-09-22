import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
@Injectable()
export class DBService {
  dataSource: DataSource;
  constructor(private configService: ConfigService) {
    this.getDataSource();
  }

  async getDataSource(): Promise<any> {
    const AppDatasource = new DataSource({
      type: 'postgres',
      host: this.configService.get('db_host'),
      port: this.configService.get('db_port'),
      username: this.configService.get('db_user'),
      password: this.configService.get('db_password'),
      database: this.configService.get('db_name'),
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
    });
    this.dataSource = await AppDatasource.initialize();
  }

  async query(sql: string, params?: any): Promise<any> {
    const queryRunner = await this.dataSource.createQueryRunner();
    const result = await queryRunner.manager.query(sql, params);
    await queryRunner.release();
    return result;
  }
}
