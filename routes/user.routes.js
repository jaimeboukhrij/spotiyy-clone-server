const { editRecentyListened,getRecentyListened,editFavouriteArtist,getFavouriteArtists} = require("../controllers/user.controllers.js")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()


router.put("/recentyListened",isAuthenticated,editRecentyListened )
router.get("/recentyListened/:userId",getRecentyListened )
router.put("/favouriteArtist",editFavouriteArtist)
router.get("/favouriteArtist/:userId",getFavouriteArtists)







module.exports = router