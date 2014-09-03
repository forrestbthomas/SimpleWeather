var request = require('request');
var secrets = require('../../API_KEYS.js');

var WeatherRequests = {};
WeatherRequests.getWeather = function(timeFrame, next) {
  if (timeFrame === 'today') {
    var options = {
      url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=95407&format=json&key=' + secrets.World_Weather_API_KEY
    };
  }
  request(options, function(error, response, body) {
    next(body);
  });
};

module.exports = WeatherRequests;
