module.exports = (sequelize, DataTypes) => {
    const TestCase = sequelize.define('TestCase', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        problemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Problem,
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        input: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        expectedOutput: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isSample: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'test_cases',
        timestamps: false
    });
    return TestCase;
}


