angular.module('myApp.main.five', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.five', {
      url: '/five',
      templateUrl: 'forecasts/five/five.tpl.html',
      controller: 'FiveController'
    })
})
.controller('FiveController', function ($scope, $sce, WeatherFactory) {
  $scope.currentCity = 'San Francisco';
  $scope.condition = 'sunny';
  $scope.currentConditions;
  $scope.forecastedConditions;
  $scope.forecasts = ['Five-Day', 'Today', 'Three-Day', 'Almanac']
  $scope.getWeather = function() {
    var city = $scope.currentCity;
    WeatherFactory.getFiveDayForecast(city)
      .then(function(response) {
        $scope.currentConditions = response.currentWeather;
        $scope.forecastedConditions = response.predictedWeather;
      })
  };
});