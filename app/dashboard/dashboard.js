'use strict';
angular.module('myApp.dashboard', ['ngRoute'])
.controller('dashboardController', [function($scope) {
var vm = this;
vm.upComingEvents = [{
    eventName: 'CIO MUNICH',
    date: 'Jan 2018',
    venue: 'Banga',
    image: 'images/admin.jpg',
},
{
    eventName: 'CIO MUNICH',
    date: 'Jan 2018',
    venue: 'Banga',
    image: 'images/admin.jpg',
}]
}]);
