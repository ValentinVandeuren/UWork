var express = require('express');
var router = express.Router();
let annonceJobModel = require('../models/annonceJob');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/annonceJob', async function(req, res, next) {
  let annonceList = await annonceJobModel.find();

  res.json(annonceList)
})

module.exports = router;