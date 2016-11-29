function OrganizationsController(OrganizationService, $location, $state, Auth, $controller) {
  var ctrl = this;

  ctrl.signedIn = Auth.isAuthenticated;

  ctrl.organizations = OrganizationService.getOrganizations()
  .then(function(response) {
    console.log(response)
  })

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
}


angular
  .module('app')
  .controller('OrganizationsController', OrganizationsController);
