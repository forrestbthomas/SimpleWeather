angular.module('myApp.main.almanac', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.almanac', {
      url: '/almanac',
      templateUrl: 'forecasts/almanac/almanac.tpl.html',
      controller: 'AlmanacController'
    })
})
.controller('AlmanacController', function ($scope, $sce, WeatherFactory) {
  $scope.currentCity = 'San Francisco';
  $scope.condition = 'sunny';
  $scope.currentConditions;
  $scope.historicConditions;
  $scope.forecasts = [ 'Almanac', 'Today', 'Three-Day', 'Five-Day'];
  $scope.getCurrent = function() {
    var city = $scope.currentCity;
    WeatherFactory.getTodaysWeather(city)
      .then(function(response) {
        $scope.currentConditions = response.currentWeather;
      });
  }
  $scope.getWeather = function() {
    var city = $scope.currentCity;
    WeatherFactory.getAlmanac(city)
      .then(function(response) {
        $scope.historicConditions = response;
      })
  };
});