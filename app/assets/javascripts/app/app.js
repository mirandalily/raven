angular
  .module('app', ['ui.router', 'templates', 'ngResource'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController'
      });
      $urlRouterProvider.otherwise('/');
  });
