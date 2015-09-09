'use strict';

var App = angular.module('App', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial']);

App.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/technology")
      
      $stateProvider
        .state('home', {
            url: "/",
            controller : 'MainCtrl',
            templateUrl: "/partials/main.html"
        })
        .state('home.technology', {
              url: "/technology",
              templateUrl: "/partials/technology.html",
              controller:"TechCtrl"
          })
        .state('home.sports', {
              url: "/sports",
              templateUrl: "/partials/sports.html",
              controller:"SportsCtrl"
          })
        .state('home.science', {
              url: "/science",
              templateUrl: "/partials/science.html",
              controller:"ScienceCtrl"
          })
        .state('home.entreprenuership', {
              url: "/entreprenuership",
              templateUrl: "/partials/entreprenuership.html",
              controller:"EntreprenuershipCtrl"
          });
          
});

App.controller('MainCtrl', function($scope) {

  $scope.technolist = [
    { name: 'Mashable', wanted: false },
    { name: 'Techcrunch', wanted: true },
    { name: 'Re/code', wanted: false },
    { name: 'Disrupt Africa', wanted: false }
  ];
});

App.controller('TechCtrl', function($scope) {

});

App.controller('EntreprenuershipCtrl', function($scope) {

});
App.controller('ScienceCtrl', function($scope) {

});
App.controller('SportsCtrl', function($scope) {

});


