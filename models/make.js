module.exports = function(sequelize, DataTypes) {
  var make = sequelize.define("make", {
    // Giving the make model a name of type STRING
    name: DataTypes.STRING
  });

  make.associate = function(db) {
    // Associating make with models
    // When an make is deleted, also delete any associated models
    make.hasMany(db.model, {
      onDelete: "cascade"
    });
  };

  return make;
};
