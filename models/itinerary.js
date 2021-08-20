"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Itinerary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Itinerary.belongsTo(models.User, {
                foreignKey: "UserId",
            });
            Itinerary.hasMany(models.Place, {
                foreignKey: "ItineraryId",
            });
        }
    }
    Itinerary.init(
        {
            checkIn: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Please input Check-In date",
                    },
                },
            },
            checkOut: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Please input Check-Out date",
                    },
                },
            },
            price: DataTypes.INTEGER,
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Itinerary",
        }
    );
    return Itinerary;
};
