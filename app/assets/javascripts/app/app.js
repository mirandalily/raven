angular
  .module('app', ['ui.router', 'templates', 'ngResource', 'Devise'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.organizations', {
        url: '/organizations',
        templateUrl: 'organizations/index.html',
        controller: 'OrganizationsController as ctrl'
      })
      .state('home.new_organization', {
        url: '/new',
        parent: 'home',
        template: 'organizations/new.html',
        controller: 'NewOrganizationController as ctrl'
      })
      .state('home.show_organization', {
        url: '/show/:id',
        parent: 'home',
        templateUrl: 'organizations/show.html',
        controller: 'ShowOrganizationController as ctrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'authorization/login.html',
        controller: 'AuthController as ctrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home.organizations')
          })
        }]
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'authorization/signup.html',
        controller: 'AuthController as ctrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home.organizations')
          })
        }]
      })
      .state('logout', {
        url: '/logout',
        controller: function($state, Auth) {
          Auth.logout().then(function(user) {
            $state.go('login');
          })
        }
      });
      $urlRouterProvider.otherwise('/');
  });
