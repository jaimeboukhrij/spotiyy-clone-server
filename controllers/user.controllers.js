const User = require("../models/User.model")

const editRecentyListened = (req, res, next) => {
  const { userId, typeMusic, idMusic, urlImg, name } = req.body;

  User.findById(userId)
    .then((user) => {
      if (user) {
        let filterData = user.recentyListened.filter((elem) => elem.id !== idMusic);
        if (filterData.length >= 12) {
          filterData.pop();
        }
        if(idMusic){
          filterData = [{ id: idMusic, typeMusic, urlImg, name }, ...filterData];
          User.findByIdAndUpdate(userId, { recentyListened: filterData })
            .then((updatedUser) => res.json(updatedUser))
            .catch((e) => console.log(e));
        }
        }
    })
    .catch((e) => console.log(e));
};

const getRecentyListened = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.json(user.recentyListened);
    })
    .catch(e => {
      console.error('Error:', e);
      res.status(500).json({ error: 'Internal server error' });
    });
};


module.exports = {editRecentyListened,getRecentyListened}