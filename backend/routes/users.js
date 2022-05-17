var express = require('express');
var router = express.Router();
let usersModel = require('../models/users');
var uid2 = require('uid2');
var cloudinary = require('cloudinary').v2;

cloudinary.config({
 cloud_name: 'dlwwftewi',
 api_key: '512472239962297',
 api_secret: '1ZTMd435-c8C_-2ohJtXLHSUhJU' 
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/verifyEmail', async function(req, res, next) {
  let verify = await usersModel.findOne({ email: req.body.email });

  console.log(verify);
  if(verify){
    res.json(verify.email);
  }else {
    let token = uid2(6);
    let isOk = true
    res.json({isOk, token });
  }
})

var uniqid = require('uniqid');
var fs = require('fs');

router.post('/uploalProfilePicture', async function(req, res, next) {
  var pictureName = './tmp/'+uniqid()+'.jpg';
  var resultCopy = await req.files.avatar.mv(pictureName)

  if(!resultCopy){
    var resultCloudinary = await cloudinary.uploader.upload(pictureName);
  }
  res.json({resultCloudinary})
  fs.unlinkSync(pictureName);
})

router.post('/createProfile', async function(req, res, next) {
  
  var newUser = new usersModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    avatar: req.body.avatar,
    age: req.body.age,
    city: req.body.city,
    bio: req.body.bio,
    email: req.body.email,
    password: req.body.password,
    token: req.body.token,
  })

  saveUser = await newUser.save()
  res.json({id : saveUser.id})
})

module.exports = router;
