let mongoose = require('mongoose');
//
//BHK schema
// let bhkSchema = mongoose.Schema({
//     title:{
//         type: String,
//         required: true
//     },
//     desc: {
//         type: String,
//         required: true
//     }
// });
//
// let bhk = module.exports = mongoose.model('BHK', bhkSchema);
//
// // Get BHK
// module.exports.getBHK = function(callback, limit){
//     bhk.find(callback).limit(limit);
// }

//Article Schema

let bhkSchema  = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

let Article = module.exports = mongoose.model('Articles', bhkSchema);