import { DataSource, DataSourceOptions } from 'typeorm';

import { config } from 'dotenv';

config({ path: '.env' });

const dbDatasource: DataSourceOptions = {
  type: 'postgres',
  host: `${process.env.POSTGRES_HOSTNAME}`,
  port: parseInt(`${process.env.POSTGRES_PORT}`, 10),
  username: `${process.env.POSTGRES_USERNAME}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DATABASE}`,
  migrations: ['dist/migrations/*.{ts,js}'],
  entities: [
    'dist/modules/**/**/*.entity.{ts,js}',
    'dist/modules/**/*.entity.{ts,js}',
  ],
  synchronize: false,
  ssl:
    process.env.NODE_ENV == 'development'
      ? false
      : {
          rejectUnauthorized: false,
        },
};

export const datasource = new DataSource(dbDatasource);
