const minifincaRoute = require('express').Router();
const {miniFincaController} = require('../controllers/index');

minifincaRoute.get('/minifincas/list', miniFincaController.list);

module.exports = minifincaRoute;