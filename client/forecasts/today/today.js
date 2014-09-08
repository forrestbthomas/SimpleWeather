angular.module('myApp.main.today', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.today', {
      url: '/today',
      templateUrl: 'forecasts/today/today.tpl.html',
      controller: 'TodayController'
    })
})
.controller('TodayController', function ($scope, WeatherFactory) {
  $scope.condition = 'Today\'s Weather is ...';
  (function getTodaysWeather(){
    WeatherFactory.getTodaysWeather()
      .then(function(response) {
        console.log(response);
      });
  })();
});