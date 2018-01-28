const mongoose = require('mongoose');

//BHK schema
const bhkSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const bhk = module.exports = mongoose.model('BHK', bhkSchema);

// Get BHK
module.exports.getBHK = function(callback, limit){
    bhk.find(callback).limit(limit);
}
