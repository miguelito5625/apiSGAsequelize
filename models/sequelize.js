const Sequelize = require('sequelize');
// const ModeloUsuario = require('./usuario');
const ModeloMiniFinca = require('./minifinca');
const ModeloSeccionMiniFinca = require('./seccionminifinca');
const ModeloAerista = require('./aerista');
const ModeloViaje = require('./viaje');
const ModeloVistaTodosLosViajes = require('./vista_todos_los_viajes');

const sequelize = new Sequelize('bandegua_dev', 'desarrollador', 'mariobross5625', {
    host: '35.226.107.150',
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true
    },
    // logging: false
  });

  // const Usuario = ModeloUsuario(sequelize, Sequelize);
  const MiniFinca = ModeloMiniFinca(sequelize, Sequelize);
  const SeccionMiniFinca = ModeloSeccionMiniFinca(sequelize, Sequelize);
  const Aerista = ModeloAerista(sequelize, Sequelize);
  const Viaje = ModeloViaje(sequelize, Sequelize);
  const VistaTodosLosViajes = ModeloVistaTodosLosViajes(sequelize, Sequelize);

  // Viaje.belongsTo(MiniFinca);
  Viaje.belongsTo(MiniFinca, {
    // as: 'mini_finca',
    foreignKey: 'id_mini_finca',
    constraints: false
  });



// sequelize.sync(
//   // {force: true}
//   )
//   .then(() => {
//     console.log(`Base de datos y tablas sincronizado correctamente`)
//   }).catch(function(err){
//     console.log('Ocurrio un error en la creacion de la base de datos y tablas');
//     console.log(err);
//   });

module.exports = {
  // Usuario,
  sequelize,
  MiniFinca,
  SeccionMiniFinca,
  Aerista,
  Viaje,
  VistaTodosLosViajes
}