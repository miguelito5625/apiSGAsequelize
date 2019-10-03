const aeristaRoute = require('express').Router();
const { aeristaController } = require('../controllers/index');

aeristaRoute.get('/aerista/list', aeristaController.list);

module.exports = aeristaRoute;