function NewOrganization(OrganizationService, $stateParams, Auth, $scope) {

  Auth.currentUser().then(function(user) {
    $scope.user = user;
    this.user = user
  })

  this.organization_id = parseInt($stateParams.id);

  this.submit = function() {
    OrganizationService.createOrganization(this.organizations);
    alert('successfully created organization')
  }
}

angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
