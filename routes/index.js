const router = require('express').Router();

router.use('/users', require('./users'));
// router.use('/impressum', require('./impressum'));

module.exports = router;
