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
        url: 'organizations',
        templateUrl: 'organizations/_organizations.html',
        controller: 'OrganizationsController as ctrl'
      })
      .state('home.new', {
        url: 'organizations/new',
        templateUrl: 'organizations/_new.html',
        controller: 'NewOrganizationController as ctrl'
      })
      .state('home.show', {
        url: 'organizations/:id',
        templateUrl: 'organizations/show.html',
        controller: 'ShowOrganizationController as ctrl'
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'authorization/login.html',
        controller: 'AuthController',
        onEnter: function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home.organizations')
          });
        }
      })
      .state('home.register', {
        url: 'register',
        templateUrl: 'authorization/register.html',
        controller: 'AuthController',
        onEnter: function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home.organizations')
          });
        }
      });
      $urlRouterProvider.otherwise('/');
  });
