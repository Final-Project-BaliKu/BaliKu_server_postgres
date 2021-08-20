"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Itinerary, {
                foreignKey: "UserId",
            });
            User.hasMany(models.Transaction, {
                foreignKey: "UserId",
            });
        }
    }
    User.init(
        {
            email: {
                type: DataTypes.STRING,
                unique: {
                    msg: "email has been registered",
                },
                validate: {
                    notEmpty: {
                        msg: "email cannot be empty",
                    },
                    isEmail: {
                        msg: "must have valid characters of an email",
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "please input password",
                    },
                    min: {
                        args: 5,
                        msg: "password must be more than 5 char",
                    },
                },
            },
        },
        {
            hooks: {
                beforeCreate: (instance, options) => {
                    const salt = bcrypt.genSaltSync(8);
                    const hashedPassword = bcrypt.hashSync(instance.password, salt);

                    instance.password = hashedPassword;
                },
            },
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
