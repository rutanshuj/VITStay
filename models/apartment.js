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
    }
});


let Article = module.exports = mongoose.model('Apartments', apartmentSchema);