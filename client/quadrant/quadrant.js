angular.module('myApp.main.quadrant', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.quadrants', {
      url: '/quadrants',
      templateUrl: 'quadrant/quadrant.tpl.html',
      controller: 'QuadrantController'
    })
})
.controller('QuadrantController', function ($scope, $sce) {
  $scope.currentCity = 'San Francisco, CA';
  $scope.condition = 'sunny';
  $scope.forecasts = ['Today', 'Three-Day', 'Five-Day', 'Almanac']
});
