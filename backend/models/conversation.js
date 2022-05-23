let mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
    sender: String,
    date: Date,
    content: String,
});

let conversationSchema = mongoose.Schema({
    compagnyOwner: String,
    employeeOwner: String,
    messages: [messageSchema]
});

let conversationModel = mongoose.model('conversation', conversationSchema);

module.exports = conversationModel;