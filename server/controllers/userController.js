import bcrypt from 'bcrypt';
import db from '../models/index';

const { Users } = db;


/**
 * @class User
 */
class User {
  /**
     * @returns {obj} user
     * @param {*} req
     * @param {*} res
     */
  static signUp(req, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({ error: `an error occured ${err}` });
      }
      return Users
        .create({
          username: req.body.username,
          email: req.body.email,
          password: hash,
        })
        .then(users => res.status(201).send(users))
        .catch(error => res.status(404).send(error.message));
    });
  }

  static signIn(req, res) {
    if (!req.body.username) {
      res.status(400).send('Username required');
    }
    if (!req.body.password) {
      res.status(400).send('Password required');
    }
    Users.findOne({
      where: {
        username: req.body.username,
      }
    })
      .then((users) => {
        if (!users) {
          return res.status(400).send({ error: 'username or password is invalid' });
        }
        const passwordIsCorrect = bcrypt.compareSync(req.body.password, users.password)
        if (!passwordIsCorrect) {
          return res.status(401).send({
            error: 'wrong user details'
          });
        }
        return res.status(200).send({
          message: 'sign in successful'
        });
      })
      .catch(error => res.status(400).send({ error: error.message }));
  }
}

export default User;
