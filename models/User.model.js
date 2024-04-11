const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10


const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^([^@]*@[^@]*)$/.test(value);
        },
        message: 'Invalid Email'
      }
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
    profileName: {
      type: String,
      required: [true, 'UserName is required.'],
      trim: true,

    },
    gender:{
      type: String,
    },
    date: {
      day: {
          type: String,
          required: true
      },
      month: {
          type: String,
          required: true
      },
      year: {
          type: String,
          required: true
      }
  },
  recentyListened: [
    {
      id: {
        type: String,
        required: true
      },
      name:{
        type:String,
        required:true
      },
      urlImg:{
        type:String,
        required:true
      },
      typeMusic: {
        type: String,
        required: true
      }
    }
  ],


  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(this.password, salt);
  this.password = hashedPassword;

  next();
});

const User = model("User", userSchema);

module.exports = User;
