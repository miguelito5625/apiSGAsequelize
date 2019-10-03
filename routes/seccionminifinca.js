const seccionMiniFincaRoute = require('express').Router();
const {seccionMiniFincaController} = require('../controllers/index');

seccionMiniFincaRoute.post('/seccionesmf/listfilter', seccionMiniFincaController.listFilter);

module.exports = seccionMiniFincaRoute;