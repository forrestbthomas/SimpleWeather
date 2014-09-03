"use strict";

var Note = require('./quadrant_model.js'),
    Q    = require('q');

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
    res.send('Yo, from the getTodaysWeather route!');
  },

  getThreeDayForecast: function(req, res, next) {
    res.send('Yo, from the getThreeDayForecast route!');
  },

  getSevenDayForecast: function(req, res, next) {
    res.send('Yo, from the getSevenDayForecast route!');
  },

  getAlmanac: function(req, res, next) {
    res.send('Yo, from the getAlmanac route!');
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