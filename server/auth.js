const router = require('express').Router();
const { User } = require('./database');
const passport = require('passport');
module.exports = router;

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (error) {
    done(error);
  }
});
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch(done);
});

// here
router.put('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) res.status(401).send('User not found');
      else if (!user.hasMatchingPassword(req.body.password))
        res.status(401).send('Incorrect password');
      else {
        req.login(user, (err) => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  req.sendStatus(204);
});
router.get('/me', (req, res, next) => {
  res.json(req.user);
});
