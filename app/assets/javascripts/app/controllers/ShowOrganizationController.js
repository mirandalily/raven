function ShowOrganizationController($stateParams, $state, Auth, $controller, OrganizationService) {

  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

    ctrl.organization = OrganizationService.get({ id: $stateParams.id });

    ctrl.deleteOrganization = function(organization) {
      if (ctrl.user.id == organization.user_id) {
        organization.$delete(function() {
          alert('Deleted Organization.')
          $state.go('home.organizations');
        });
      } else {
        alert('Something went wrong.')
      }
    }

}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
