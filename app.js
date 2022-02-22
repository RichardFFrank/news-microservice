require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const slashRouter = require("./newsroute");

app.use("/", slashRouter);

module.exports = app;