module.exports = (sequelize, type) => {
    return sequelize.define('seccion_mini_finca', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre_seccion_mini_finca: {
            allowNull: false,
            type: type.STRING(50)
        },
        id_mini_finca: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'mini_finca', 
                key: 'id'
             }
        }
    }
    )
}