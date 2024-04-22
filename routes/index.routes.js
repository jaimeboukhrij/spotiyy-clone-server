const router = require("express").Router();

router.use('/auth', require('./auth.routes.js'))
router.use('/user', require('./user.routes.js'))
router.use('/playList', require('./playList.routes.js'))

module.exports = router;
