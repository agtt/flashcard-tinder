/*
 * FILENAME: index.js
 * PROJECT:  flashcards-tinder
 * CREATED:  2018-01-08T10:54:03
 * MODIFIED: 2018-01-09T17:14:54
 * VERSION:  0.1.0
 * ABOUT:    flashcard-tinder server entry-point
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

/*********************
  NODE REQUIREMENTS
 *********************/
require(dotenv).config();

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

/*********************
  LOCAL REQUIREMENTS
 *********************/
const keys = require('./config/keys');
const authRoutes = require('./routes/auth-routes');

require('./models/User');
require('./services/passport');

/*********************
  APPLICATION SERVER
 *********************/
/* Heroku will dynamically allocate a PORT */
const PORT = process.env.PORT || process.env.DEV_PORT;
const app = express();
require('./routes/authRoutes.js')(app);

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.googleCookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParse.json());

app.listen(PORT, (err) => {
  if (err) return console.log(`ERROR port ${PORT}`);
  console.log(`Studdy Buddy now listening for requests on port ${PORT}`);
});
 
/********************
 * Mongo and Mongoose
 ********************/
mongoose.Promise = Promise;
mongoose.connect(
  keys.mongoURI,
  {useMongoClient: true},
  (err) => {
    if (err) return console.log(err);
    console.log('Connected to FlashCards DataBase from Server.js!');
  }
);
