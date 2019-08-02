module.exports = function(sequelize, DataTypes) {
  var model = sequelize.define("model", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  model.associate = function(db) {
    // We're saying that a model should belong to an make
    // A model can't be created without an make due to the foreign key constraint
    model.belongsTo(db.make, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return model;
};
