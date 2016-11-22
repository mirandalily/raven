function OrganizationsController(OrganizationService, $location, $state, Auth, $controller)) {

  var ctrl = this;

  ctrl.signedIn = Auth.isAuthenticated;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  this.organizations = OrganizationService.query();

}

angular
  .module('app')
  .controller('OrganizationsController', OrganizationsController);