const moment = require('moment');
module.exports = (sequelize, type) => {
    return sequelize.define('viaje', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        numero_viaje: {
            allowNull: false,
            type: type.INTEGER
        },
        id_aerista: {
            allowNull: false,
            type: type.INTEGER,
            references: {
                model: 'aerista', 
                key: 'id'
             }
        },
        id_mini_finca: {
            allowNull: false,
            type: type.INTEGER,
            references: {
                model: 'mini_finca', 
                key: 'id'
             }
        },
        id_seccion_mini_finca: {
            allowNull: false,
            type: type.INTEGER,
            references: {
                model: 'seccion_mini_finca', 
                key: 'id'
             }
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