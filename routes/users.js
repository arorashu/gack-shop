var passport = require('passport');
var Account = require('../models/account');
var Catalog = require('../models/Catalog');
var Male = require('../models/Male');
var Female = require('../models/Female');
var Transaction = require('../models/Transaction');
var Merchant = require('../models/Merchant');
var express = require('express');


var router = express.Router();
var auth = require('../userLogic/auth')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({status: "on /user/"});
});

router.get('/register',function(req,res,next) {
    res.render('register');
});

router.post('/register',function(req,res,next) {

    Account.register(new Account({

      username : req.body.username,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      gender:req.body.gender,
      age:req.body.age,
      occupation:req.body.occupation

}), req.body.password, function(err, account) {
        if (err || !account) {
            return res.json({ error: err});
        }
        else {
            return res.redirect('/admin/profile');

        }
    });
});


//add user details
router.post('/addDetails', function(req, res, next) {

    Account.findById(req.body.accountID, function (err, account) {
        if(err){
            return res.json({success:false, error: err});
        }

        account.firstName=req.body.firstName;
        account.lastName=req.body.lastName;
        account.gender=req.body.lastName;
        account.age=req.body.age;
        account.phoneNo=req.body.phoneNo;
        account.photo=req.body.photo;
        account.email=req.body.email;

        account.save(function (err) {
            if(err){
                return res.json({success: true,error:err});
            }
            else{
                return res.json({success:true});
            }
        });
    });
});

router.post('/newArrivals', function(req,res,next){

  Catalog.find({merchant : req.body.merchant},null, {sort: '-dateAdded'},function(err, product) {
    if(err) res.json({success : false, err: err});
    else {
      res.json({success : true, product : product});

    }
  }).limit(20)
});




router.post('/login', passport.authenticate('local'),function(req,res) {
        return res.json({success:true, user:req.user});
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
