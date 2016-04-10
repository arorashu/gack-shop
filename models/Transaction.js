/**
 * Created by Saksham on 4/9/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transaction = new Schema({
    products: [{
        productID: Schema.ObjectId,
        quantity: Number,
        totalPrice: Number
    }],
    buyerID: Schema.ObjectId,
    cost: Number,
    date:  {type:Date,default:Date.now},
    merchantID: Schema.ObjectId,
    bill: String

});


module.exports = mongoose.model('Transaction', Transaction);
