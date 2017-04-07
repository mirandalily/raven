function NewOrganizationController(OrganizationService, CategoryService, $stateParams, $state, $http, Auth){

	var ctrl = this;

  CategoryService.getCategories().then(function(resp) {
    ctrl.categories = resp.data;
  });

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  })

  ctrl.addOrganization = function() {

    var data = {
        name: ctrl.organization.name,
        description: ctrl.organization.description,
        address: ctrl.organization.address,
        donations: ctrl.organization.donations,
        category_id: this.category.id
    };


    OrganizationService.createOrganization(data);
    $state.go('home.organizations');
  };

}


angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
