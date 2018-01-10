/*
 * FILENAME: User.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-08T14:37:17
 * MODIFIED: 2018-01-09T16:56:52
 * VERSION:  0.1.0
 * ABOUT:    Mongoose User model
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES: 
 *********************************************************************************/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String,
});

mongoose.model('user', userSchema);
