'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TestCase', [
      {
        problemId: 3,
        input: JSON.stringify([2, 7, 11, 15]),   
        expectedOutput: JSON.stringify(9),       
        isSample: false
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('TestCase', null, {});
  },
};
