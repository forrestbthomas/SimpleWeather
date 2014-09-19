"use strict";

var controller = require('./quadrant_controllers.js');

module.exports = exports = function (app) {
  app.post('/getTodaysWeather', controller.getTodaysWeather);
  app.get('/getThreeDayForecast', controller.getThreeDayForecast);
  app.get('/getFiveDayForecast', controller.getFiveDayForecast);
  app.get('/getAlmanac', controller.getAlmanac);
};