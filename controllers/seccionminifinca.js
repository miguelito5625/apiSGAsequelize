const seccionMiniFincaController = {};
const {SeccionMiniFinca} = require('../models/sequelize');

seccionMiniFincaController.listFilter = (req, res) => {

    const filter = req.body.filter;
    console.log('el filtro de mini finca es: ',filter);

    SeccionMiniFinca.findAll({
        where: {
            id_mini_finca: filter
          }
      }).then((secciones)=>{
        res.send({secciones});
    });



};

module.exports = seccionMiniFincaController;