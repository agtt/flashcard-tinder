/*
 * FILENAME: authRoutes.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-08T14:13:18
 * MODIFIED: 2018-01-09T16:44:00
 * VERSION:  0.1.0
 * ABOUT:    Holds oauth routes
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

const passport = require('passport');

module.exports = (app) => {

  const authCheck = (req, res, next) => {
    if (req.user) {
      res.redirect('/api/login');
    } else {
      next();
    }
  }
  
  app.get('/', authCheck, (req, res) => {
    res.render('profile', { user: req.use });
  });

  app.get('/api/login', (req, res) => {
    res.render('login', {user: req.user});
  });

  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.redirect('/');
    }
  );

  app.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']})
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );
}
