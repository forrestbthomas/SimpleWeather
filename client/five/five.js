angular.module('myApp.main.five', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.five', {
      url: '/five',
      templateUrl: 'five/five.tpl.html',
      controller: 'FiveController'
    })
})
.controller('FiveController', function ($scope, WeatherFactory) {
  $scope.condition = 'Today\'s Weather is ...';
  var getFiveDayForecast = function(){
    WeatherFactory.getFiveDayForecast()
      .then(function(response) {
        $scope.condition = response;
      });
  };
  getFiveDayForecast();
});