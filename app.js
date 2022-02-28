require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const slashRouter = require("./newsroute");

app.use("/", slashRouter);

module.exports = app;