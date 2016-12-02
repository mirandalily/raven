function OrganizationsController(organizations, OrganizationService, $location, $state, $stateParams, Auth, $controller) {
  var ctrl = this;

  ctrl.signedIn = Auth.isAuthenticated;

  ctrl.organizations = organizations.data;
  console.log(ctrl.organizations);

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
}


angular
  .module('app')
  .controller('OrganizationsController', OrganizationsController);
