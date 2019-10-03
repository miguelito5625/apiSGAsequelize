const otrasRutas = require('express').Router();

otrasRutas.get('/otra', ((req, res) =>{
    res.send('otra ruta');
}))

module.exports = otrasRutas;