const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const ip = require('ip');
const app = express();

app.set('port', process.env.PORT || 3000);


app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', routes);


const server = app.listen(app.get('port'), () => {
    console.log(`server on address ${ip.address()}:${app.get('port')}`);
  });
  
//   sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });