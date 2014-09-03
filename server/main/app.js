"use strict";

var express = require('express');
var app = express();
var routers = {};
var QuadrantRouter = express.Router();
routers.QuadrantRouter = QuadrantRouter;

require('./config.js')(app, express, routers);

require('../quadrant/quadrant_routes.js')(QuadrantRouter);

module.exports = exports = app;