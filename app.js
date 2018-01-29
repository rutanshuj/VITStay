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

app.use(bodyParser.json());

//Bring in Models
let Apar = require('./models/apartment');
let Lld = require('./models/landlord');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/api/apartments', (req, res)=>{
    Apar.find({}, (err, apt)=> {
       if(err){
           console.log(err);
       }else{
           res.json(apt);
           // res.render('index',{
           //     title: 'Apartments',
           //     apts: apt
           // });
       }
   });
});

app.post('/api/apartments', (req, res)=>{
    let apartment = req.body;
    Apar.addApartment(apartment, (err, apartment)=>{
       if(err){
           throw err;
       } else{
           res.json(apartment);
       }
    });
});

app.get('/api/landlords', (req, res)=>{
    Lld.find({}, (err, lld) =>{
       if(err){
           console.log(err);
       }
       else{
           res.json(lld);
       }
    });
});

// Getting Landlords By Id
app.get('/api/landlords/:_id', (req, res)=>{
    Lld.getLandlordById(req.params._id, (err, lld) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(lld);
        }
    });
});
//Start Server
app.listen(port, ()=> {
   console.log('Server Started on Port:'+ port);
});
