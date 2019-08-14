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

    PlaneInput.associate = function(db) {
      // We're saying that a model should belong to an make
      // A model can't be created without an make due to the foreign key constraint
      PlaneInput.belongsTo(db.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
return PlaneInput
}