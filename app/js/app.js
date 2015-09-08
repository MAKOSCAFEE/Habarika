'use strict';

var App = angular.module('App', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial']);

App.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/")
      
      $stateProvider
        .state('Home', {
            url: "/",
            controller : 'MainCtrl',
            templateUrl: "/partials/main.html"
        })
});

App.controller('MainCtrl', function($scope) {

  $scope.technolist = [
    { name: 'Mashable', wanted: false },
    { name: 'Techcrunch', wanted: true },
    { name: 'Re/code', wanted: false },
    { name: 'Disrupt Africa', wanted: false }
  ];
});





