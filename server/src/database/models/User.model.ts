import {DataTypes, Model} from 'sequelize';

import db from '.';

class User extends Model {
  public id!: number;
  public object!: string;
}

User.init({
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
    }
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'objects',
    timestamps: false,
  }
);
