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
    WeatherRequest.getWeather('today', function(response) {
      res.send(response);
    });
  },

  getThreeDayForecast: function(req, res, next) {
    WeatherRequest.getWeather('three', function(response) {
      res.send(response);
    });
  },

  getSevenDayForecast: function(req, res, next) {
    WeatherRequest.getWeather('five', function(response) {
      res.send(response);
    });
  },

  getAlmanac: function(req, res, next) {
    WeatherRequest.getAlmanac(function(response) {
      res.send(response);
    });
  },

  post: function (req, res, next) {
    var note = req.body.note;
    var $promise = Q.nbind(Note.create, Note);
    $promise(note)
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
};