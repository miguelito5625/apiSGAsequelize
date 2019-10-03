module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    },
    { 
      sequelize, 
      timestamps: true 
    }
    )
}