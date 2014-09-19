angular.module('myApp.main.today', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.today', {
      url: '/today',
      templateUrl: 'forecasts/today/today.tpl.html',
      controller: 'TodayController'
    })
})
.controller('TodayController', function ($scope, $sce) {
  $scope.currentCity = 'San Francisco, CA';
  $scope.condition = 'sunny';
  $scope.forecasts = ['Today', 'Three-Day', 'Five-Day', 'Almanac']
});