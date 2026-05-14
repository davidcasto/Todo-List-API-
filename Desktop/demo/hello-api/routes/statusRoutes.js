const express = require("express");
const routes = express.Router();

const {getstatus, getStatus} = require("../controllers/statusController");

routes.get("/",getStatus);

module.exports= routes;