module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.BLOB,
      allowNull: true,
    },
  });

  Todo.associate = (models) => {
    Users.hasMany(models.Recipes, {
      foreignKey: 'RecipeId',
      as: 'Recipes',
    });
    Users.hasMany(models.Favorites, {
      foreignKey: 'FavoriteId',
      as: 'Recipes',
    });
  };

  return Users;
};