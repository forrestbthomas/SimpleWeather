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
    };
    var getSevenDayForecast = function() {
      return $http({
        method: 'GET',
        url: '/getSevenDayForecast'
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
      getSevenDayForecast: getSevenDayForecast,
      getAlmanac: getAlmanac
    };
  });
}(angular));