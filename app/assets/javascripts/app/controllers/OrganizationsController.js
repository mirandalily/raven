function OrganizationsController(organizations, OrganizationService, $location, $state, $stateParams, Auth) {
  var ctrl = this;

  ctrl.signedIn = Auth.isAuthenticated;

  ctrl.organizations = organizations.data;
  console.log(ctrl.organizations);

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

ctrl.organizations.forEach(function(organization){
  organization.upvote = [];
});


  ctrl.upvoteOrganization = function(organization) {
    organization.upvote.push("1");
    organization.count = organization.upvote.length;
  }



}


angular
  .module('app')
  .controller('OrganizationsController', OrganizationsController);
