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
        controller: 'OrganizationsController as ctrl',
      })
      .state('home.new', {
        url: 'organizations/new',
        templateUrl: 'organizations/_new.html',
        controller: 'NewOrganizationController as ctrl'
      })
      .state('home.show', {
        url: 'organizations/:id',
        templateUrl: 'organizations/_show.html',
        controller: 'ShowOrganizationController as ctrl'
      })
      .state('home.edit', {
        url: 'organizations/:id/edit',
        templateUrl: 'organizations/_edit.html',
        controller: 'EditOrganizationController as ctrl'
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'authorization/login.html',
        controller: 'AuthController',
        onEnter: function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home')
          });
        }
      })
      .state('home.register', {
        url: 'register',
        templateUrl: 'authorization/register.html',
        controller: 'AuthController',
        onEnter: function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home')
          });
        }
      });
      $urlRouterProvider.otherwise('/');
  });
