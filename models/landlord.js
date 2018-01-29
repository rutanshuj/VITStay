let mongoose = require('mongoose');

let landlordschema  = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    apartment: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

let Landlord = module.exports = mongoose.model('Landlords', landlordschema);

module.exports.getLandlordById = function(id, callback){
    Landlord.findById(id, callback);
}