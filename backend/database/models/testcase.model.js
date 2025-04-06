module.exports = (sequelize, DataTypes) => {
  const TestCase = sequelize.define('TestCase', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    problemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'problems',  
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
    },
  }, {
    tableName: 'TestCase', 
    timestamps: true, 
  });


  TestCase.associate = (models) => {
    TestCase.belongsTo(models.Problem, { foreignKey: 'problemId', as: 'problem' });
  };

  return TestCase; 
};
