const { editRecentyListened,getRecentyListened} = require("../controllers/user.controllers.js")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.put("/recentyListened",editRecentyListened )
router.get("/recentyListened/:userId",getRecentyListened )







module.exports = router