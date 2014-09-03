angular.module('myApp.main.quadrant', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.quadrants', {
      url: '/quadrants',
      templateUrl: 'quadrant/quadrant.tpl.html',
      controller: 'QuadrantController'
    });
})
.controller('QuadrantController', function ($scope, WeatherFactory) {
  $scope.getTodaysWeather = function(){
    return WeatherFactory.getTodaysWeather();
  };
  $scope.getThreeDayForecast = function() {
    return WeatherFactory.getThreeDayForecast();
  }
});
