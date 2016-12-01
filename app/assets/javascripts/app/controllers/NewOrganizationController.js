function NewOrganizationController(OrganizationService, $state, $scope, Auth, $controller){

	var ctrl = this;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  })

  ctrl.addOrganization = function() {

        var data = {
            name: ctrl.organization.name,
            description: ctrl.organization.description,
            address: ctrl.organization.address,
        };
        console.log(data)

        OrganizationService.createOrganization(data);
        $state.go('home.organizations');
      };

}

angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
