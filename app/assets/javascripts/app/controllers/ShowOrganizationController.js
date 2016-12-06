
function ShowOrganizationController($stateParams, $http, $location, $state, Auth, OrganizationService) {
  console.log('ShowOrganizationController is working');
  console.log($stateParams);
  var ctrl = this;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });

  OrganizationService.getOrganization($stateParams.id)
    .then(function(resp){
    console.log(resp);
      ctrl.organization = resp.data;
  });


}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
