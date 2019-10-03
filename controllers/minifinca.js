const miniFincaController = {};
const { MiniFinca } = require('../models/sequelize');


miniFincaController.list = (req, res) => {

    MiniFinca.findAll().then((miniFincas)=>{
        res.send({miniFincas});
    });

};

module.exports = miniFincaController;