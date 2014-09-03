(function (angular) {
  "use strict";

  angular.module('myApp')
  .factory('WeatherFactory', function ($http) {
    var getTodaysWeather = function() {
      return $http({
        method: 'GET',
        url: '/getWeather'
      })
      .then(function(response) {
        console.log(response.data);
      })
    }
    return {
      getTodaysWeather: getTodaysWeather
    };
  });
}(angular));