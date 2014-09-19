angular.module('myApp.main.three', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.three', {
      url: '/three',
      templateUrl: 'forecasts/three/three.tpl.html',
      controller: 'ThreeController'
    })
})
.controller('ThreeController', function ($scope, $sce, WeatherFactory) {
  $scope.currentCity = 'San Francisco';
  $scope.condition = 'sunny';
  $scope.currentConditions;
  $scope.forecastedConditions;
  $scope.forecasts = ['Three-Day', 'Today', 'Five-Day', 'Almanac']
  $scope.getWeather = function() {
    var city = $scope.currentCity;
    WeatherFactory.getThreeDayForecast(city)
      .then(function(response) {
        $scope.currentConditions = response.currentWeather;
        $scope.forecastedConditions = response.predictedWeather;
      })
  };
});