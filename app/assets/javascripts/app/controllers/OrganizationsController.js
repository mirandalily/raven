function OrganizationsController(organizations, OrganizationService, $location, $state, $stateParams, Auth) {
  var ctrl = this;

  ctrl.signedIn = Auth.isAuthenticated;

  ctrl.organizations = organizations.data;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.addUpvote = function(organization) {
    organization.upvotes += 1;
  }

}


angular
  .module('app')
  .controller('OrganizationsController', OrganizationsController);
