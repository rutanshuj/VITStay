const http = require('http'); //Core Module
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //Core Module

const app = express();
const port = 3000;
const expressValidator = require('express-validator');


/* const logger = (req, res, next) =>{
    console.log('Logging...');
    next(); //next to fire next middleware and to end this
}
app.use(logger); //logger is the middleware required and app.use uses it
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

//Express Validator Middleware
app.use(expressValidator(middlewareOptions));

const users = [
    {
       id: 1,
       first_name: "John",
       last_name: "Doe",
       email: "johndoe@gmail.com",
    },
    {
        id: 2,
        first_name: "Rutanshu",
        last_name: "Jhaveri",
        email: "rjhaveri41@gmail.com"
    },
    {
        id: 3,
        first_name: "Jane",
        last_name: "Jackson",
        email: "jj@gmail.com"
    }
];
app.get('/', (req, res) =>{;
   res.render('index', {
      title: 'Customers',
      users: users
   });
});

app.post('/users/add', (req, res)=>{

    req.checkBody('first_name', 'First Name is Required').notEmpty();
    req.checkBody('last_name', 'Last Name is Required').notEmpty();
    req.checkBody('emmail', 'Email is Required').notEmpty();

    const errors = req.validationErrors();

    if(errors){
    console.log('ERRORS');
    }else{
        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        console.log('SUCCESS');
    }
});

app.listen(port, ()=> {
   console.log('Server Started on Port:'+port);
});
