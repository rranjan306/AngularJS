'use strict';

angular.module('app', [
  'ui.router',
  'restangular',
  'app.login'
  ])

  .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/login');
    $locationProvider.hashPrefix('!');
  }])

  .controller('myCtrl', ['$scope', function($scope) {
    $scope.name = 'ranjan';
  }]);