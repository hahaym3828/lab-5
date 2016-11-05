var express = require('express');
var router = express.Router();
var account = require('../models/account');
var passport = require('passport');
/* GET users listing. */

router.get('/', function(req, res, next) {
  // use the Drink model to query the db for drink data
  function isLoggedIn (req,res,next) {
    if (req.isAuthenticated()){
      next();
    }
    else
    {
      res.redirect('/login');
    }
  }
  account.find(function(err, accounts) {
    res.render('users', {
      title: 'users',
      users: accounts,
      user: req.user
    });

      res.render('users', {
        title: 'userlist',
        message: 'userlist',
        account:'account',
        user: req.user

      });


  });
});





module.exports = router;
