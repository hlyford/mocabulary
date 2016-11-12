import Sequelize from 'sequelize';
import {sequelize} from '../database.js';

const User = sequelize.define('User', {
  phone_number: {
    type: Sequelize.STRING
  },
}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true // Model tableName will be the same as the model name
});

// console.log(User.create);
module.exports = User;