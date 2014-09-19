angular.module('myApp.main.today', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.today', {
      url: '/today',
      templateUrl: 'forecasts/today/today.tpl.html',
      controller: 'TodayController'
    })
})
.controller('TodayController', function ($scope, $sce, WeatherFactory) {
  $scope.currentCity = 'San Francisco';
  $scope.condition = 'sunny';
  $scope.currentConditions;
  $scope.forecastedConditions;
  $scope.forecasts = ['Today', 'Three-Day', 'Five-Day', 'Almanac']
  $scope.getWeather = function() {
    var city = $scope.currentCity;
    WeatherFactory.getTodaysWeather(city)
      .then(function(response) {
        $scope.currentConditions = response.currentWeather;
        $scope.forecastedConditions = response.predictedWeather;
      })
  };
});