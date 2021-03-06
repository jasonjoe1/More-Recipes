import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes/index';

const Sequelize = require('sequelize');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to More-Recipes'
}));

export default app;
