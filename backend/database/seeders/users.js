'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        userId: 'unique_user_id_1',
        password: 'hashed_password_1',
        email: 'user1@example.com',
        dob: '1990-01-01',
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        userId: 'unique_user_id_2',
        password: 'hashed_password_2',
        email: 'user2@example.com',
        dob: '1992-02-02',
        firstName: 'Jane',
        lastName: 'Smith'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
