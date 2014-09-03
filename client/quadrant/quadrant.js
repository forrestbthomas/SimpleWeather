angular.module('myApp.main.quadrant', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.quadrants', {
      url: '/quadrants',
      templateUrl: 'quadrant/quadrant.tpl.html',
      controller: 'QuadrantController'
    })
})
.controller('QuadrantController', function ($scope, $sce, WeatherFactory) {
  $scope.condition;
  $scope.getTodaysWeather = function(){
    WeatherFactory.getTodaysWeather()
      .then(function(response) {
        $scope.condition = response;
      })
  };
  $scope.getThreeDayForecast = function() {
    return WeatherFactory.getThreeDayForecast();
  };
  $scope.getSevenDayForecast = function() {
    return WeatherFactory.getSevenDayForecast();
  };
  $scope.getAlmanac = function() {
    return WeatherFactory.getAlmanac();
  }
});
