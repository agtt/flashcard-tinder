/*
 * FILENAME: routes/authRoutes.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-08T14:13:18
 * MODIFIED: 2018-01-10T09:49:01
 * VERSION:  0.1.0
 * ABOUT:    Sets up oauth routes
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

const passport = require('passport');

module.exports = (app) => {

//   const authCheck = (req, res, next) => {
//     if (!req.user) {
//       res.redirect('/auth/google');
//     } else {
//       next();
//     }
//   }
  
//   app.get('/', authCheck, (req, res) => {
//     res.send('profile', { user: req.use });
//   });

//   app.get('/login', (req, res) => {
//     res.send('login', {user: req.user});
//   });

//   app.get(
//     '/logout',
//     (req, res) => {
//       req.logout();
//       res.redirect('/');
//     }
//   );

  app.get(
    '/', (req, res) => {
      res.send({ "Hi": "from Server" });
    }
  );

  app.get(
    '/auth/google',
    passport.authenticate(
      'google', { scope: ['profile', 'email'] }
    )
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

  app.get(
    '/api/current_user', (req, res) => {
      res.send(req.user);
    }
  );

  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.send({ "Bye": "From Server" });
    }
  );
}
