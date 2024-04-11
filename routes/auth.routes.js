const { signUp, logIn, verify } = require('../controllers/authControllers.js')
const { isAuthenticated } = require('../middlewares/verifyToken.middleware.js')

const router = require('express').Router()
router.post('/signup', signUp)
router.post('/login', logIn)
router.get('/verify',isAuthenticated ,verify)

module.exports = router