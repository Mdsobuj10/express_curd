const http =  require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const nodemon  = require('nodemon');
const colors  = require('colors');

const pageRouter = require('./routers/pageRouter');


//express ini

const app = express();

//static file init 
//app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static('./public/'));
//espress middlewares manegess 

///data maneges

app.use(express.json())
app.use(express.urlencoded( {extended : false}))

//view s engine inishial
app.set('view engine', 'ejs');



//all Router manege 
app.use(pageRouter);

// manegs express layouts 




//server created 
app.listen(5000, () =>{
    console.log('server start'.bgBlack);
    
})