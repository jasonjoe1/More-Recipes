import chai from 'chai';
import supertest from 'supertest';
//import validateFunction from '../validators/validateinput';
import app from '../../app';

const expect = chai.expect;
const request = supertest(app);
let data = {};
let updateData = {};
const upVote = '1';

describe('API Endpoints testing', () => {
  describe('Get all recipes in the application', () => {
    beforeEach(() => {
      data = {
        id: 1,
        name: 'Jollof Rice',
        description: 'Probably the best jollof rice you have ever had in your entire life',
        category: 'Food',
        ingredients: ['Rice', 'Groundnutoil', 'tomato puree','Spices'],
        instructions: ['Parboil rice', 'Put parboiled rice is cooking puree', 'Allow to cook'],
        upVote: 0,
        downVote: 0,
        favorite: 0,
        reviews: [
          {
            review: '',
          },
        ],
      };
      updateData = {
        name: 'Jollof Rice',
        description: 'Probably the best jollof rice you have ever had in your entire life',
        category: 'Dessert',
        ingredients: ['Rice', 'Groundnutoil', 'tomato puree','Spices'],
        instructions:['Parboil rice', 'Put parboiled rice is cooking puree', 'Allow to cook'],
      };
    });
    it('Should get all the recipes in the application', () => {
      request.get('/api/v1/recipes')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res).to.be.an('object');
        });
    });
    it('Should create new recipe in the application', () => {
      request.post('/api/v1/recipes')
        .send(data)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res).to.be.an('object');
        });
    });
    it('Should update the current recipe in the application', () => {
      request.put('/api/v1/recipes/:recipeId')
        .send(updateData)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res).to.be.an('object');
        });
    });
    it('Should delete the recipe in the application', () => {
      request.delete('/api/v1/recipes/:recipeId')
        .end((err, res) => {
          expect(res.status).to.equal(201);
        });
    });
    it('Should upvote the current recipe', () => {
      request.post('/api/v1/recipes/:recipeId/testVote')
        .send(upVote)
        .end((err, res) => {
          expect(res.status).to.equal(201);
        });
    });
  });
});
