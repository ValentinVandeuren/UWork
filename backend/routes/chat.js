var express = require('express');
var router = express.Router();
let conversationModel = require('../models/conversation');

/* GET home page. */
router.post('/foundConversation', async function(req, res, next) {
  let conversation = await conversationModel.find()

  let listConversation = [];

  for(let i=0; i<conversation.length; i++){
    if(req.body.id === conversation[i].employeeOwner || req.body.id === conversation[i].compagnyOwner){
      listConversation.push(conversation[i])
    }
  }

  res.json(listConversation)
})

module.exports = router;