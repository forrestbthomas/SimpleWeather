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
        var date = response.data.data.weather[0].date;
        var precipitation = response.data.data.weather[0].precipMM;
        var maxTemp = response.data.data.weather[0].tempMaxF;
        var minTemp = response.data.data.weather[0].tempMinF;
        var windDir = response.data.data.weather[0].winddirection;
        var windSpeed = response.data.data.weather[0].windspeedMiles;
        var formattedWeather = ['Date: ' + date, 'Precipitation: ' + precipitation,
        'High: ' + maxTemp, 'Low: ' + minTemp, 'Wind Direction: ' + windDir,
        'Wind Speed: ' + windSpeed];
        console.log(formattedWeather);
        return formattedWeather;
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