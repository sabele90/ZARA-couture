const { DataTypes } = require("sequelize");
const { sequelize } = require("../../DB-connection");

const Clothes = sequelize.define(
  "clothes",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    image1: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    image3: {
      type: DataTypes.STRING,
    },
    image4: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titleComposition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    composition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Clothes;
