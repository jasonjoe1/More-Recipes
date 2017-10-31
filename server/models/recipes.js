module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Recipes.associate = (models) => {
    Recipes.belongsTo(models.Users, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };

  return TodoItem;
};