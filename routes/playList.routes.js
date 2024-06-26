const {savePlayList,createPlayList,getMyPlayLists,getPlayListInfo, deleteMyPlayList} = require("../controllers/playList.controllers.js")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const router = require("express").Router()

router.get("/getMyPlayLists/:userId",getMyPlayLists )
router.delete("/deletePlayList/:playListId",deleteMyPlayList)
router.get("/getPlayListInfo/:playListId",getPlayListInfo )
router.put("/savePlayList",savePlayList )
router.post("/createPlayList",createPlayList)








module.exports = router