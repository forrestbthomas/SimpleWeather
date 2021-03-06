var request = require('request');
var secrets = require('../../API_KEYS.js');

var WeatherRequests = {};
WeatherRequests.getWeather = function(timeFrame, q, next) {
  if (timeFrame === 'today') {
    var options = {
      url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=' + q + '&format=json&key=' + secrets.World_Weather_API_KEY
    };
  } else if (timeFrame === 'three') {
    var options = {
      url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=95407&format=json&num_of_days=3&key=' + secrets.World_Weather_API_KEY
    };
  } else if (timeFrame === 'five') {
    var options = {
      url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=95407&format=json&num_of_days=5&key=' + secrets.World_Weather_API_KEY
    };
  }
  request(options, function(error, response, body) {
    next(body);
  });
};
WeatherRequests.getAlmanac = function(q, next) {
  var date = new Date();
  var year = (date.getFullYear() - 1).toString();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month.toString();
  } else {
    month = month.toString();
  }
  var day = date.getDate().toString();
  console.log(year+month+day)
  var options = {
      url: 'http://api.wunderground.com/api/' + secrets.Weather_Underground_API_KEY + '/history_' + year + month + day + '/q/CA/' + q + '.json'
    };
  request(options, function(error, response, body) {
    next(body);
  });
}
module.exports = WeatherRequests;
