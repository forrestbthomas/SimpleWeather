"use strict";

var controller = require('./quadrant_controllers.js');

module.exports = exports = function (app) {
  app.post('/getTodaysWeather', controller.getTodaysWeather);
  app.post('/getThreeDayForecast', controller.getThreeDayForecast);
  app.post('/getFiveDayForecast', controller.getFiveDayForecast);
  app.post('/getAlmanac', controller.getAlmanac);
};