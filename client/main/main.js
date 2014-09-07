(function (angular) {
  "use strict";
  angular.module('myApp.main', ['ui.router', 'myApp.main.quadrant', 'myApp.main.today', 'myApp.main.three', 'myApp.main.five'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApp.main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/main.tpl.html'
      });
  });
}(angular));
