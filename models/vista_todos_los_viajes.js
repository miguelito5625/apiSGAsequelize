const moment = require('moment');
module.exports = (sequelize, type) => {
    return sequelize.define('vista_todos_los_viajes', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        numeroViaje: {
            allowNull: false,
            type: type.INTEGER
        },
        nombreAerista: {
            allowNull: false,
            type: type.STRING,
        },
        idAerista: {
            allowNull: false,
            type: type.INTEGER,
        },
        nombre_mini_finca: {
            allowNull: false,
            type: type.STRING
        },
        idMiniFinca: {
            allowNull: false,
            type: type.INTEGER,
        },
        nombre_seccion_mini_finca: {
            allowNull: false,
            type: type.STRING
        },
        idSeccionMiniFinca: {
            allowNull: false,
            type: type.INTEGER,
        },
        amarillo: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        negro: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        rojo: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        verde: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        morado: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        cafe: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        naranja: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        azul: {
            allowNull: true,
            type: type.INTEGER,
            defaultValue: 0
        },
        updated_at: {
            allowNull: false,
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('NOW() ON UPDATE NOW()'),
            get() {
                return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD h:mm:ss');
            }
        },
        created_at: {
            allowNull: false,
            type: 'TIMESTAMP',
            get() {
                return moment(this.getDataValue('created_at')).format('YYYY-MM-DD h:mm:ss');
            }
        }
    }
    )
}