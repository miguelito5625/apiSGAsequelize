const routes = require('express').Router();
const {controllers} =  require('../controllers/index');
const miniFincasRoute = require('./minifinca');
const seccionMiniFincasRoute = require('./seccionminifinca');
const aeristaRoute = require('./aerista');
const viajeRoute = require('./viaje');

routes.use('/', viajeRoute);
routes.use('/', aeristaRoute);
routes.use('/', miniFincasRoute);
routes.use('/', seccionMiniFincasRoute);
routes.get('/', controllers.indexPage);
routes.get('*', function(req, res){
    res.send('error 404');
  });


module.exports = routes;