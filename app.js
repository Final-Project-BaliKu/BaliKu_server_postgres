"use strict";

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./router/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(router);

app.use(errorHandler); /// use error handler

module.exports = app;
