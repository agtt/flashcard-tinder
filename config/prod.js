/*
 * FILENAME: prod.js
 * PROJECT:  flashcards-tinder
 * CREATED:  2018-01-09T16:24:16
 * MODIFIED: 2018-01-09T16:32:00
 * VERSION:  0.1.0
 * ABOUT:    Returns production config keys
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    Okay to commit
 *********************************************************************************/

module.exports = {
  googleClientID:     process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackURI:  process.env.GOOGLE_CALLBACK_URI,
  mongoURI:           process.env.MONGODB_URI,
  cookieKey:          process.env.COOKIE_KEY,
}
