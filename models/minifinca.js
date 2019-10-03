module.exports = (sequelize, type) => {
    return sequelize.define('mini_finca', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre_mini_finca: {
            allowNull: false,
            type: type.STRING(50)
        }
    }
    )
}