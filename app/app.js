'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.dashboard'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardController',
    controllerAs: 'vm'
  })
  .otherwise({redirectTo: '/dashboard'});
}]);
