const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Email = sequelize.define('Email', {

    to: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

module.exports = Email;
