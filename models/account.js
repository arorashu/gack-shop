var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    gender: String,
    email: String,
    Age: Number,
    Photo: String,
    phoneNo: Number,
    occupation: String,
    isMerchant: {type: Boolean, default: false}
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
