const aeristaController = {};
const { Aerista, sequelize } = require('../models/sequelize');

aeristaController.list = (req, res) => {

    Aerista.findAll({
        attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('nombre1'), ' ', sequelize.col('apellido1')), 
        'nombre_aerista']]
    }).then((Aeristas) =>{
        res.send({Aeristas});
    });

};

module.exports = aeristaController;