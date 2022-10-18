module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "location",
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        
        country_id: {
          type: DataTypes.INT,
        }
      },
      {
        tableName: "location",
        timestamps: false,
      }
    );
  };
  