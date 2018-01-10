/*
 * FILENAME: keys.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-08T11:45:56
 * MODIFIED: 2018-01-09T16:20:57
 * VERSION:  0.1.0
 * ABOUT:    Picks which set of keys to use based upon state of NODE_ENV,
 *           dev.js or prod.js
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    This project uses Node package dotenv, and places this information in
 *           .env; this file may be placed in Git repo
 *********************************************************************************/

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
