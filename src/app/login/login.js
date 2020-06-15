'use strict';

angular.module('app.login', [])
  .config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state('login', {
        url: '/login',
        views: {
          main: {
            controller: 'LoginCtrl',
            controllerAs : 'vm',
            templateUrl: 'login/login.tpl.html'
          }
        },
        data: {
          pageTitle: 'Login Page'
        }
      });
  }])

  .controller('LoginCtrl', function() {
    let vm = this;

  });