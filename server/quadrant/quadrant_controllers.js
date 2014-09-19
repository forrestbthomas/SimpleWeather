"use strict";

var Note = require('./quadrant_model.js'),
    Q    = require('q'),
    WeatherRequest = require('../requests/world_weather_request');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Note.find, Note);
    $promise()
      .then(function (notes) {
        res.json(notes);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  getTodaysWeather: function(req, res, next) {
    var queryString = req.body.city.replace(" ", "%20") || req.body.city;
    WeatherRequest.getWeather('today', queryString, function(response) {
      res.send(response);
    });
  },

  getThreeDayForecast: function(req, res, next) {
    WeatherRequest.getWeather('three', function(response) {
      res.send(response);
    });
  },

  getFiveDayForecast: function(req, res, next) {
    WeatherRequest.getWeather('five', function(response) {
      res.send(response);
    });
  },

  getAlmanac: function(req, res, next) {
    WeatherRequest.getAlmanac(function(response) {
      res.send(response);
    });
  }
};