let mongoose = require('mongoose');

//Apartments Schema

let apartmentSchema  = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    landlord: {
        type: String,
        required: true
    },
    caretaker: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});


let Apartment = module.exports = mongoose.model('Apartments', apartmentSchema);

//Add Genre
module.exports.addApartment = function(apartment, callback){
    Apartment.create(apartment, callback);
}