var express = require('express');
var router = express.Router();
let usersModel = require('../models/users');
var uid2 = require('uid2');
var cloudinary = require('cloudinary').v2;
var uniqid = require('uniqid');
var fs = require('fs');

cloudinary.config({
 cloud_name: 'dlwwftewi',
 api_key: '512472239962297',
 api_secret: '1ZTMd435-c8C_-2ohJtXLHSUhJU' 
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', async function(req, res, next) {
  let user = await usersModel.findOne({ email: req.body.email });

  if(user && user.password === req.body.password){
    res.json({firstName: user.firstName, id: user.id, avatar: user.avatar});
  } else if(!user) {
    res.json("Email is not exist")
  }else {
    res.json("Password is invalid")
  }
})

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
  res.json({id : saveUser.id, firstName: saveUser.firstName, avatar: saveUser.avatar})
})

router.post('/addTypeJob', async function(req, res, next) {
  let user = await usersModel.findOne({ _id: req.body.id })

  user.jobType.push({
    contract: req.body.contract,
    sector: req.body.sector,
    city: req.body.city,
    distance: req.body.distance,
    regime: req.body.regime,
  })
  let userSaved = await user.save();

  res.json("sending");
})

router.post('/addEducation', async function(req, res, next) {
  let user = await usersModel.findOne({ _id: req.body.id })

  user.education.push({
    school: req.body.school,
    studyfield: req.body.studyfield,
    degree: req.body.degree,
    start: req.body.start,
    end: req.body.end,
    description: req.body.description,
  })
  await user.save();

  res.json("sending");
})

router.post('/addLanguage', async function(req, res, next) {
  let user = await usersModel.findOne({ _id: req.body.id })

  user.language.push({
    name: req.body.name,
    level: req.body.level,
    description: req.body.description,
  })
  await user.save();

  res.json("sending");
})

router.post('/displayLanguage', async function(req, res, next) {
  let user = await usersModel.findOne({ _id: req.body.id })
  res.json(user.language);
})

router.post('/displayEducation', async function(req, res, next) {
  let user = await usersModel.findOne({ _id: req.body.id })
  res.json(user.education);
})

module.exports = router;