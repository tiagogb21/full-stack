import { Sequelize } from 'sequelize';

const config = require('../config/db');

export default new Sequelize(config);
