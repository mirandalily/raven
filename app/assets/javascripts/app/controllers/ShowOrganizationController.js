function ShowOrganizationController($stateParams, $state, Auth, OrganizationService) {

  var ctrl = this;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });

  OrganizationService.getOrganization($stateParams.id).then(function(resp){
    ctrl.organization = resp.data;
  });


}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
