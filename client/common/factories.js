(function (angular) {
  "use strict";

  angular.module('myApp')
  .factory('WeatherFactory', function ($http) {
    var formatWeather = function(obj, currentOrPrediction, i) {
      var precipitation = obj[currentOrPrediction][i || 0].precipMM;
      var maxTemp = obj[currentOrPrediction][i || 0].tempMaxF || obj[currentOrPrediction][0].temp_F;
      var minTemp = obj[currentOrPrediction][i || 0].tempMinF || 'Current condition has no min';
      var formattedWeather = ['Precipitation: ' + precipitation,
      'High: ' + maxTemp, 'Low: ' + minTemp];
      return formattedWeather;
    };
    var getTodaysWeather = function(city) {
      return $http({
        method: 'POST',
        url: '/getTodaysWeather',
        data: {city: city}
      })
      .then(function(response) {
        var currentWeather = formatWeather(response.data.data, 'current_condition');
        var predictedWeather = formatWeather(response.data.data, 'weather');
        return {
          currentWeather: currentWeather,
          predictedWeather: predictedWeather
        };
      });
    };
    var getThreeDayForecast = function(city) {
      return $http({
        method: 'POST',
        url: '/getThreeDayForecast',
        data: {city: city}
      })
      .then(function(response) {
        var weatherArray = response.data.data.weather;
        var currentWeather = formatWeather(response.data.data, 'current_condition');
        var predictedWeather = [];
        for (var i = 0; i < weatherArray.length; i++) {
          predictedWeather.push(formatWeather(response.data.data, 'weather', i));
        }
        return {
          currentWeather: currentWeather,
          predictedWeather: predictedWeather
        };
      })
    };
    var getFiveDayForecast = function(city) {
      return $http({
        method: 'POST',
        url: '/getFiveDayForecast',
        data: {city: city}
      })
      .then(function(response) {
        var weatherArray = response.data.data.weather;
        var currentWeather = formatWeather(response.data.data, 'current_condition');
        var predictedWeather = [];
        for (var i = 0; i < weatherArray.length; i++) {
          predictedWeather.push(formatWeather(response.data.data, 'weather', i));
        }
        return {
          currentWeather: currentWeather,
          predictedWeather: predictedWeather
        };
      })
    };
    var getAlmanac = function(city) {
      return $http({
        method: 'POST',
        url: '/getAlmanac',
        data: {city: city}
      })
      .then(function(response) {
        var yearAgoHighTemp = response.data.history.dailysummary[0].maxtempi;
        var yearAgoLowTemp = response.data.history.dailysummary[0].mintempi;
        var yearAgoPrecip = response.data.history.dailysummary[0].precipi;
        var almanacWeather = ['Precipitation: ' + yearAgoPrecip, 'High: ' + yearAgoHighTemp, 'Low: ' + yearAgoLowTemp];
        return almanacWeather;
      })
    };
    return {
      getTodaysWeather: getTodaysWeather,
      getThreeDayForecast: getThreeDayForecast,
      getFiveDayForecast: getFiveDayForecast,
      getAlmanac: getAlmanac
    };
  });
}(angular));