// seeders/20230722123456-problem-seeder.js

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Problems', [{
      statement: "Given an array of integers, return the indices of the two numbers such that they add up to a specific target.",
      name: "Two Sum",
      difficulty: "Medium",
      tags: ["Array", "Dynamic Programming"],
      topics: ["Searching", "Hashing"],
      contest_id: "contest_123",
      created_by: 'f107804d-95bc-4bf9-903a-47e0bcef72bf',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Problems', null, {});
  }
};
