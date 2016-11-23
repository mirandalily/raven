function NewOrganizationController(OrganizationService, $stateParams, Auth, $scope) {

  var ctrl = this;

  ctrl.organization = new OrganizationService();

  ctrl.addOrganization = function() {
    if (Auth.isAuthenticated()) {
      ctrl.organization.$save(function() {
        $location.path('organizations');
      });
    } else {
      alert('oops');
    };
  };

}

angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
