import Sequelize from 'sequelize';
import {sequelize} from '../database.js';

const Word = sequelize.define('Word', {
  phone_number: {
    type: Sequelize.STRING
  },
  word: {
    type: Sequelize.STRING
  },
  definition: {
    type: Sequelize.STRING
  },
  sentence_1: {
    type: Sequelize.STRING
  },
  sentence_2: {
    type: Sequelize.STRING
  },
  part_of_speech: {
    type: Sequelize.STRING
  }
}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true // Model tableName will be the same as the model name
});

// console.log(User.create);
module.exports = Word;