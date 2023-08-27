const express = require('express');
const feedRoutes = require('./routes/feed');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((request,response, next) =>{
    response.setHeader('Acess-Control-Allow-Origin', '*');
    response.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    response.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}); 

//GET /feed/posts
app.use('/feed/', feedRoutes);

app.listen(8080);
 