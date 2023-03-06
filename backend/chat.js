
const express = require('express');
const app = express();
const {port} = require('./config');
const  bodyParser = require('body-parser'); 

// db
require('./db/mongo');
//routes
const apiRouter = require('./routes/api');
app.use('/api/', apiRouter);

app.listen(port, function(){
    console.log('nasłuchuje'+ port);
});

