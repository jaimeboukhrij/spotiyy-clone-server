const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    urlImg: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    },
    likes: {
      type: Number,
      trim: true,
    },
    duration: {
      type: Number,
      trim: true,
    },
    tracks: [
      {
        trackName: {
          type: String,
        },
        duration: {
          type: String,
        },
        date: {
          type: String,
        },
        trackId: {
          type: String,
        },
        artistTrack: [{
          type: String,
        }],
        artistTrackId:[{
          type: String,
        }],
        album: {
          type: String,
        },
        urlImg: {
          type: String,
        },
        isHover: {
          type: Boolean,
        },
        albumId: {
          type: String,
        },
        urlTrack: {
          type: String,
        },
      }
    ],
  },
  {
    timestamps: true
  }
);

const PlayList = model("PlayList", userSchema);

module.exports = PlayList;
