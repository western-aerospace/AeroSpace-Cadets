module.exports = function(sequelize, DataTypes) {
    var PlaneInput = sequelize.define("PlaneInput", {
      
      serial: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      make: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      // The email cannot be null, and must be a proper email before creation
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })
return PlaneInput
}