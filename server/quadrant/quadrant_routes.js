"use strict";

var controller = require('./quadrant_controllers.js');

module.exports = exports = function (app) {
  app.get('/getTodaysWeather', controller.getTodaysWeather);
  app.get('/getThreeDayForecast', controller.getThreeDayForecast);
  app.get('/getSevenDayForecast', controller.getSevenDayForecast);
  app.get('/getAlmanac', controller.getAlmanac);
};