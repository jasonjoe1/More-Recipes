module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    directions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Favorite.associate = (models) => {
    Favorite.belongsToMany(models.Recipes, {
      foreignKey: 'favoriteId',
      as: 'Favorites',
    });
    Favorite.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Favorite;
};