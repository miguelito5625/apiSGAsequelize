const viajeController = {};
const { Viaje, sequelize, MiniFinca, VistaTodosLosViajes } = require('../models/sequelize');

viajeController.todosLosViajes = (req, res) => {
    // Aerista.findAll({
    //     attributes: ['id', [sequelize.fn('CONCAT', sequelize.col('nombre1'), ' ', sequelize.col('apellido1')), 
    //     'nombre_aerista']]
    // }).then((Aeristas) =>{
    //     res.send({Aeristas});
    // });

    // Viaje.findAll().then((viajes)=>{
    //     res.send({viajes});
    // });

    var tamanioBody = Object.keys(req.body).length;
    const fechas = req.body;

    if (tamanioBody == 0) {

        // sequelize.query('SELECT viaje.id, viaje.numero_viaje AS numeroViaje, CONCAT(aerista.nombre1, " ", aerista.apellido1) AS nombreAerista,' +
        //     ' aerista.id AS idAerista, mini_finca.nombre_mini_finca, mini_finca.id as idMiniFinca, seccion_mini_finca.id AS idSeccionMiniFinca, ' +
        //     ' seccion_mini_finca.nombre_seccion_mini_finca, viaje.amarillo, viaje.negro, viaje.rojo, viaje.verde, viaje.morado, viaje.cafe,' +
        //     ' viaje.naranja, viaje.azul, viaje.updated_at, viaje.created_at' +
        //     ' FROM (((viaje ' +
        //     ' INNER JOIN aerista ON viaje.id_aerista = aerista.id)' +
        //     ' INNER JOIN mini_finca ON viaje.id_mini_finca = mini_finca.id)' +
        //     ' INNER JOIN seccion_mini_finca ON viaje.id_seccion_mini_finca = seccion_mini_finca.id)').then((viajes) => {
                
        //         var objeto1 = {
                    
        //         };
        //         console.log(viajes[0][0].created_at);

        //         res.json({ viajes });
        //     });

        VistaTodosLosViajes.findAll({
        }).then((viajes)=>{
            res.send({viajes});
        });

    }




}

module.exports = viajeController;