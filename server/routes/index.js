import User from '../controllers/userController';
import Recipe from '../controllers/recipeController';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes!',
  }));

  app.post('/api/users/signup', User.signUp);
  app.post('/api/users/signin', User.signIn);
  app.post('/api/recipes', Recipe.createRecipe);
  // app.get('/api/recipes', Recipe.list);
};

