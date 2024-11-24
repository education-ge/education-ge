import { DataSource, DataSourceOptions } from 'typeorm';
import * as process from 'node:process';

const config: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    username: process.env.DB_USER,
    synchronize: false,
    ssl: process.env.NODE_ENV === 'production',
    entities: ['src/**/entities/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: '_migrations',
};

export default new DataSource(config);
