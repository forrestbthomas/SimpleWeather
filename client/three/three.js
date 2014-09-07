angular.module('myApp.main.three', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.three', {
      url: '/three',
      templateUrl: 'three/three.tpl.html',
      controller: 'ThreeController'
    })
})
.controller('ThreeController', function ($scope, WeatherFactory) {
  $scope.condition = 'Today\'s Weather is ...';
  var getThreeDayForecast = function(){
    WeatherFactory.getThreeDayForecast()
      .then(function(response) {
        $scope.condition = response;
      });
  };
  getThreeDayForecast();
});