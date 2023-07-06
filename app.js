require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const routes = require('./routes/routes');

mongoose.connect(process.env.URL_DB).then(()=>{
    console.log('Connect')
}).catch((error)=>{
    console.log("Error")
})



const app = express();
app.use('/',routes)


app.listen(port,()=>{
    console.log('Listen on port 3000');
})