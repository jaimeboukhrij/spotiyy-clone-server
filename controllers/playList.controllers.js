const PlayList = require("../models/PlayList.model")
const mongoose = require('mongoose');


const savePlayList = (req,res,next) =>{
  const{_id,name,urlImg,description,likes,duration,tracks} = req.body
  console.log(_id,name,urlImg,description,likes,duration,tracks)
  PlayList
  .findByIdAndUpdate(_id,{name,urlImg,description,likes,duration,tracks})
  .then(data => res.json(data))
  .catch(e => console.log(e))
}
const createPlayList = (req,res,next) =>{
  const {userId, length} = req.body
  console.log(userId,req.body)
  const data = { 
    name: `Mi lista n.º${length + 1}`,
    description: '',
    urlImg: '',
    owner: userId,
    likes: 5,
    duration: 3000,
    tracks: []
  }
  PlayList
  .create({ ...data })
  .then((createdUser) => {res.json(createdUser)})
  .catch(err => console.log(err))

}
const getMyPlayLists = (req, res, next) => {
  const ownerId = req.params.userId; // Obtiene el userId de req.params
  const ownerObjectId = new mongoose.Types.ObjectId(ownerId);

  PlayList.find({ owner: ownerObjectId })
    .then(playlists => {
      res.json(playlists); // Devuelve las playlists encontradas
    })
    .catch(error => {
      console.error('Error al obtener las playlists:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    });
};
const deleteMyPlayList = (req, res, next) => {
  const { playListId } = req.params;
  console.log('holaa',req.params)
  PlayList.findByIdAndDelete(playListId)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: "Playlist not found" });
      }
      res.status(200).json({ message: "Playlist deleted successfully", data });
    })
    .catch(e => {
      console.error(e);
      res.status(500).json({ message: "Internal server error" });
    });
};


const getPlayListInfo = (req,res,next) =>{
  const {playListId} = req.params; // Obtiene el userId de req.params
PlayList.findById(playListId)
    .then(playlists => {
      res.json(playlists); // Devuelve las playlists encontradas
    })
    .catch(error => {
      console.error('Error al obtener las playlists:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    });
};


module.exports = {savePlayList,createPlayList,getMyPlayLists,getPlayListInfo,deleteMyPlayList}