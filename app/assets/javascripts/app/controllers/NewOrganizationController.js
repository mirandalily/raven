function NewOrganizationController(OrganizationService, $stateParams, Auth, $scope) {

  var ctrl = this;

  ctrl.organization = new OrganizationService();

  ctrl.addOrganization = function() {
    ctrl.organization.$save(function() {
      $location.path('organizations');
    });
  };

}

angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
