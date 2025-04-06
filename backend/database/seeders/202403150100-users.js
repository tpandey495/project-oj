'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('test@123', saltRounds);
    await queryInterface.bulkInsert('Users', [
      {
        userId:'f107804d-95bc-4bf9-903a-47e0bcef72bf',
        password: hashedPassword,
        email: 'test@gmail.com',
        dob: '2002-07-18',
        firstName: 'test',
        lastName: 'test',
        role: 'superadmin'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
