const http = require('http'); //Core Module
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //Core Module
const mongoose = require('mongoose');

const port = 2000;

mongoose.connect('mongodb://localhost/abode');
let db = mongoose.connection;

db.once('open', function(){
    console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function (err) {
    console.log(err);
});
//Init App
const app = express();

//Bring in Models
let Bhk = require('./models/apartment');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function(req, res){
   Bhk.find({}, function (err, bhk) {
       if(err){
           console.log(err);
       }else{
           res.render('indexone',{
               title: 'BHK',
               bhks: bhk
           });
       }
   });
});


//Start Server
app.listen(port, ()=> {
   console.log('Server Started on Port:'+ port);
});
