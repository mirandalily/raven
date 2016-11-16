function NewOrganization(OrganizationService, $location, Auth, $controller) {
  var ctrl = this;

  ctrl.organization = new OrganizationService();
  ctrl.addOrganization = function() {
    if(Auth.isAuthenticated()) {
      ctrl.organization.$save(function() {
        $location.path('organizations');
      });
    } else {
      alert('not logged in!');
    };
  };
}

angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
