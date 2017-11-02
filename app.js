import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressValidator from 'express-validator';
import routes from './server/routes/index';

const bcrypt = require('bcrypt');
const saltRounds = 10;

const Sequelize = require('sequelize');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to More-Recipes'
}));

require('./server/routes')(app)
app.get('/',(req, res)=>res.status(200).send({
  message: 'Welcome'
}))

export default app;
