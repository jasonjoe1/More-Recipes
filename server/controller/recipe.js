import recipes from '../model/recipe';
/**
 * @class Recipe
 */
class Recipe {
  /**
     * @returns {obj} recipes
     * @param {*} req
     * @param {*} res
     */
  static getRecipe(req, res) {
    return res.json({
      recipes
    });
  }
  static createRecipe(req, res) {
    recipes.push({
      id: recipes.length + 1,
      name: req.body.name,
      upvotes: 0,
      downvotes: 0,
      favorited: 0,
      views: 0,
      description: req.body.description,
      image: req.body.image,
      ingredients: req.body.ingredients,
      directions: req.bodydirections,
    });
    return res.json({
      message: 'success',
      error: false
    });
  }
  static updateRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes[i].name = req.body.name;
        recipes[i].description = req.body.description;
        recipes[i].image = req.body.image;
        recipes[i].ingredients = req.body.ingredients;
        recipes[i].directions = req.body.directions;
        return res.json({
          recipes: recipes[i],
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
  static removeRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes.splice(i, 1);
        return res.json({
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
  static retrieveRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        return res.json({
          recipes: recipes[i],
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
}
export default Recipe;
