(function (angular) {
  "use strict";

  angular.module('myApp')
  .factory('WeatherFactory', function ($http) {
    var getTodaysWeather = function(city) {
      return $http({
        method: 'POST',
        url: '/getTodaysWeather',
        data: {city: city}
      })
      .then(function(response) {
        var formatWeather = function(currentOrPrediction) {
          var precipitation = response.data.data[currentOrPrediction][0].precipMM;
          var maxTemp = response.data.data[currentOrPrediction][0].tempMaxF || response.data.data[currentOrPrediction][0].temp_F;
          var minTemp = response.data.data[currentOrPrediction][0].tempMinF || 'Current condition has no min';
          var formattedWeather = ['Precipitation: ' + precipitation,
          'High: ' + maxTemp, 'Low: ' + minTemp];
          return formattedWeather;
        }
        var currentWeather = formatWeather('current_condition');
        var predictedWeather = formatWeather('weather');
        return {
          currentWeather: currentWeather,
          predictedWeather: predictedWeather
        };
      });
    };
    var getThreeDayForecast = function() {
      return $http({
        method: 'GET',
        url: '/getThreeDayForecast'
      })
      .then(function(response) {
        console.log(response.data);
      })
    };
    var getFiveDayForecast = function() {
      return $http({
        method: 'GET',
        url: '/getFiveDayForecast'
      })
      .then(function(response) {
        console.log(response.data);
      })
    };
    var getAlmanac = function() {
      return $http({
        method: 'GET',
        url: '/getAlmanac'
      })
      .then(function(response) {
        console.log(response.data);
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