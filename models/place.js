"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Place extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Place.belongsTo(models.Itinerary, {
                foreignKey: "ItineraryId",
            });
        }
    }
    Place.init(
        {
            location_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            location: DataTypes.STRING,
            rating: DataTypes.INTEGER,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
            ItineraryId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Place",
        }
    );
    return Place;
};
