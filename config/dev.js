/*
 * FILENAME: dev.js
 * PROJECT:  flashcards-tinder
 * CREATED:  2018-01-09T16:24:16
 * MODIFIED: 2018-01-09T16:32:00
 * VERSION:  0.1.0
 * ABOUT:    Returns development config keys
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    Okay to commit
 *********************************************************************************/

module.exports = {
  googleClientID:     process.env.GOOGLE_DEV_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_DEV_CLIENT_SECRET,
  googleCallbackURI:  process.env.GOOGLE_DEV_CALLBACK_URI,
  mongoURI:           process.env.MONGODB_DEV_URI,
  cookieKey:          process.env.DEV_COOKIE_KEY,
}
