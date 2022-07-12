import { DataSourceOptions } from 'typeorm';

// Check typeORM documentation for more information.
const dbConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: 5432,
  database: process.env.PG_DATABASE,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: true,
  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [__dirname + '/migrations/*.ts'],
  migrationsTableName: 'typeorm_migrations',
};

const config = {
  ...dbConfig,
  cli: { migrationsDir: __dirname + '/migrations' },
};

console.log({ config });

export = config;
