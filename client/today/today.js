angular.module('myApp.main.today', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.main.today', {
      url: '/today',
      templateUrl: 'today/today.tpl.html',
      controller: 'TodayController'
    })
})
.controller('TodayController', function ($scope) {
  $scope.condition = 'true';
});