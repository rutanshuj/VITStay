const http = require('http'); //Core Module
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //Core Module

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

/* const logger = (req, res, next) =>{
    console.log('Logging...');
    next(); //next to fire next middleware and to end this
}
app.use(logger); //logger is the middleware required and app.use uses it
*/

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
   res.send("Hello World") ;
});



app.listen(port, ()=> {
   console.log('Server Started on Port:'+port);
});
