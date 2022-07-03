import { DataTypes, Model } from 'sequelize';

const db = require('../config/db');

class UserModel extends Model {
  // Auto generated:
  public id!: number;

  public email: string;

  public name: string;

  public age: number;

  public createdAt!: Date;

  public updatedAt!: Date;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'objects',
  timestamps: false,
});

export default UserModel;
