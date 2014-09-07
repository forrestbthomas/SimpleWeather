angular.module('myApp.main.almanac', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.almanac', {
      url: '/almanac',
      templateUrl: 'forecasts/almanac/almanac.tpl.html',
      controller: 'AlmanacController'
    })
})
.controller('AlmanacController', function ($scope, WeatherFactory) {
  $scope.condition = 'Today\'s Weather is ...';
  var getAlmanac = function(){
    WeatherFactory.getAlmanac()
      .then(function(response) {
        $scope.condition = response;
      });
  };
  getAlmanac();
});