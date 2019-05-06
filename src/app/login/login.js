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
            template: '<span>Hello</span>'
          }
        },
        data: {
          pageTitle: 'Login Page'
        }
      });
  }])

  .controller('LoginCtrl', function() {
    console.log('hello');
  });