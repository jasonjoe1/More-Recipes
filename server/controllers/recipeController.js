import db from '../models/index';

const { Recipes } = db;

/**
 * @class Recipe
 */
class Recipe {
  /**
     * @returns {obj} recipe
     * @param {*} req
     * @param {*} res
     */
  static createRecipe(req, res) {
    return Recipes
      .create({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        userId: req.body.userId,
      })
      .then(recipes => res.status(201).send(recipes))
      .catch(error => res.status(404).send(error.message));
  }
  static getRecipe(req, res) {
    return Recipes.all()
      .then(recipe => res.status(200).send(recipe))
      .catch(error => res.status(400).send(error.message));
  }
}


export default Recipe;
