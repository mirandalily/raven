function ShowOrganizationController($stateParams, $state, Auth, OrganizationService) {
   console.log('ShowOrganizationController is being used');
   console.log($stateParams);
  var ctrl = this;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });


  OrganizationService.getOrganization($stateParams.id).then(function(resp){
    console.log(resp);
    ctrl.organization = resp.id;
  });


}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
