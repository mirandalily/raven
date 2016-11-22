function EditOrganizationController(OrganizationService, $stateParams, Auth, $controller, $location) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.organization = OrganizationService.get({ id: $stateParams.id });

  ctrl.editOrganization = function() {
    if (ctrl.user.id === ctrl.organization.user_id) {
      ctrl.organization.$update(function() {
        $location.path('organizations');
      });
    } else {
      alert("you aren't allowed to do that");
    }
  };

}

angular
  .module('app')
  .controller('EditOrganizationController', EditOrganizationController);
