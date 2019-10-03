const controllers = {};
// const { Usuario } = require('../models/sequelize');
const aereoController = require('./aereo');
const miniFincaController = require('./minifinca');
const seccionMiniFincaController = require('./seccionminifinca');
const aeristaController = require('./aerista');
const viajeController = require('./viaje');



controllers.indexPage = (req, res) =>{
    // Usuario.findAll().then((users)=>{
    //     const data  = users;
    //     res.send({data});
    // })
    res.send('Index');
}



module.exports = {
    controllers,
    aereoController,
    miniFincaController,
    seccionMiniFincaController,
    aeristaController,
    viajeController
};