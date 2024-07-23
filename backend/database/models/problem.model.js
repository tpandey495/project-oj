// models/Problem.js

module.exports = (sequelize, DataTypes) => {
  const Problem = sequelize.define('Problem', {
    statement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    topics: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    contest_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',  
        key: 'userId'        
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  });

  Problem.associate = (models) => {
    Problem.belongsTo(models.User, { foreignKey: 'created_by', as: 'creator' });
  };

  return Problem;
};
