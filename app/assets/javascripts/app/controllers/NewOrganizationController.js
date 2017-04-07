function NewOrganizationController(OrganizationService, CategoryService, $stateParams, $scope, $state, $http, Auth){

	var ctrl = this;

  CategoryService.getCategories().then(function(resp) {
    ctrl.categories = resp.data;
  });

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  })

  ctrl.donations = [{}];

  ctrl.addDonation = function() {
    	ctr.donations.push({});
      console.log(ctrl.donations);
    };

  ctrl.remove = function(index) {
    	$scope.donations.splice(index, 1);
    };

  ctrl.addOrganization = function() {

    ctrl.donations = ctrl.organization.donations;
    var allDonations = [];

    for (var key in donations) {
      if (donations.hasOwnProperty(key)) {
        var donation = donations[key].text;
        allDonations.push(donation);
      }
    }
    var data = {
        name: ctrl.organization.name,
        description: ctrl.organization.description,
        address: ctrl.organization.address,
        donations: allDonations.join("/r/n"),
        category_id: this.category.id
    };


    OrganizationService.createOrganization(data);
    $state.go('home.organizations');
  };

}


angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
