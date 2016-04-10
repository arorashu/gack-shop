var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Male = new Schema({
    age_group: { // age groups are between 10-18,18-25 and 25 and older
      min:Number,
      max:Number,
      tags:[{
        name:String,
        number:Number
      }]
    },
    season: {
      types:String, // winter,summer,spring,fall
      tags:[{
        name:String,
        number:Number
    }]
    },
    occupation: {
      types: String, // student,professional,buisness,retired
      tags:[{
        name:String,
        number:Number
      }]
    }
});


module.exports = mongoose.model('Male', Male);
