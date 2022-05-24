let mongoose = require('mongoose');

let imageJobSchema = mongoose.Schema({
    direction: String,
})

let AnnonceJob = mongoose.Schema({
    jobName: String,
    sector: String,
    description: String,
    imageJob: [imageJobSchema],
    contract: String,
    contractDuration: String,
    Address: String,
    Zip: Number,
    City: String,
    regime: String,
});

let oldUsersSchema = mongoose.Schema({
    id: String,
})

let compagnySchema = mongoose.Schema({
    logo: String,
    compagnyName: String,
    siteWeb: String,
    Address: String,
    zip: Number,
    city: String,
    bio: String,
    email: String,
    password: String,
    token: String,
    AnnonceJob: [AnnonceJob],
    oldUsers: [oldUsersSchema],
});

let compagnyModel = mongoose.model('compagnies', compagnySchema);

module.exports = compagnyModel;