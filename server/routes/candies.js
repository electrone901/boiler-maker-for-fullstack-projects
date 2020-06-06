const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    res.send('YAY GETTING CANDIES');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
