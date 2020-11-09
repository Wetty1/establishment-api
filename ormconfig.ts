import { ConnectionOptions } from 'typeorm';

import { config } from 'dotenv';

config();

const connectionConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_BASE,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  ssl: { rejectUnauthorized: false },
  synchronize: false,
  logging: true,
  entities: [__dirname + '/src/modules/**/models/*.entity{.js,.ts}'],
  migrations: [__dirname + '/src/shared/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: __dirname + '/src/shared/typeorm/migrations',
  },
};

export default connectionConfig;
