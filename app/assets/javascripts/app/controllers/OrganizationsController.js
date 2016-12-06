function OrganizationsController(organizations, OrganizationService, $location, $state, $stateParams, Auth) {
  var ctrl = this;

  ctrl.signedIn = Auth.isAuthenticated;

  ctrl.organizations = organizations.data;
  console.log(ctrl.organizations);

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

    OrganizationService.getOrganizations()
			.then(function(response) {
				ctrl.organizations = response.data;
			});
}


angular
  .module('app')
  .controller('OrganizationsController', OrganizationsController);
