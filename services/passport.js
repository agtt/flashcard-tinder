/*
 * FILENAME:  passport.js
 * PROJECT:   flashcards-tinder
 * CREATED:   2018-01-08T13:41:37
 * MODIFIED:  2018-01-09T17:05:25
 * VERSION:   0.1.0
 * ABOUT:     Handles Passport functionality
 * AUTHORS:   Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    
 *********************************************************************************/

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config//keys');
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID:     keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL:  keys.googleCallbackURL,
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(
        (existingUser) => {
          if (existingUser) {
            console.log('User is: ', existingUser);
            done(null, existingUser);
          } else {
            new User(
              {
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.image.url
              }
            ).save().then(
              newUser => {
                console.log('new user created:' + newUser);
                done(null, newUser);
              }
            );
          }
        }
      )
    }
  )
);

passport.serializeUser(
  (user, done) => {
    done(null, user.id);
  }
);

passport.deserializeUser(
  (id, done) => {
    User.findById(id).then(
      user => {
        done(null, user);
      }
    );
  }
);
