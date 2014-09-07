angular.module('myApp.main.today', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.today', {
      url: '/today',
      templateUrl: 'today/today.tpl.html',
      controller: 'TodayController'
    })
})
.controller('TodayController', function ($scope, WeatherFactory) {
  $scope.condition = 'Today\'s Weather is ...';
  var getTodaysWeather = function(){
    WeatherFactory.getTodaysWeather()
      .then(function(response) {
        $scope.condition = response;
      });
  };
  getTodaysWeather();
});