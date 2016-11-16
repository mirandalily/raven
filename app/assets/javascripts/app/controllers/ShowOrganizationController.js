function ShowOrganizationController(OrganizationService, $stateParams, $state, Auth, $controller) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.organization = OrganiationService.get({ id: $stateParams.id});

  ctrl.deleteOrganization = function(organization) {
    if (ctrl.user.id === organization.user_id) {
      organization.$delete(function() {
        $state.go('home.organizations');
      });
    } else {
      alert("you can't delete this!");
    };
  }
}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
