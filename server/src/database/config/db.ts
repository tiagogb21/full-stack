/* eslint-disable import/no-import-module-exports */
import 'dotenv/config';
// Importamos a classe Options da biblioteca sequelize
import { Options } from 'sequelize';

// Instância do banco de dados:
// Variável do tipo Options;
const config: Options = {
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '12345',
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
