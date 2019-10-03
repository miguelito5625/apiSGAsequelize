module.exports = (sequelize, type) => {
    return sequelize.define('aerista', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre1: {
            allowNull: false,
            type: type.STRING(50)
        },
        nombre2: {
            allowNull: false,
            type: type.STRING(100)
        },
        apellido1: {
            allowNull: false,
            type: type.STRING(50)
        },
        apellido2: {
            allowNull: false,
            type: type.STRING(100)
        },
        direccion: {
            allowNull: false,
            type: type.STRING(150)
        },
        telefono: {
            allowNull: true,
            type: type.STRING(20)
        }
    }
    )
}