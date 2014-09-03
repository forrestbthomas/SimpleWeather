(function (angular) {
  "use strict";

  angular.module('myApp')
  .factory('WeatherFactory', function ($http) {
    var getTodaysWeather = function() {
      return $http({
        method: 'GET',
        url: '/getTodaysWeather'
      })
      .then(function(response) {
        console.log(response.data);
      })
    };
    var getThreeDayForecast = function() {
      return $http({
        method: 'GET',
        url: '/getThreeDayForecast'
      })
      .then(function(response) {
        console.log(response.data);
      })
    }
    return {
      getTodaysWeather: getTodaysWeather,
      getThreeDayForecast: getThreeDayForecast
    };
  });
}(angular));