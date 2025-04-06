// migrations/20230722123456-create-problem.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;

    return queryInterface.createTable('TestCase', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      problemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Problems', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      input: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      expectedOutput: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isSample: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TestCase');
  },
};
