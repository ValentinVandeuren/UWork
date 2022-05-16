var express = require('express');
var router = express.Router();
let usersModel = require('../models/users');
var uid2 = require('uid2');

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

module.exports = router;
