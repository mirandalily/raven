function NewOrganizationController(OrganizationService, $stateParams, $state, $http, Auth){

	var ctrl = this;

  ctrl.donations = [{name: ''}, {name: ''}];

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  })

  ctrl.addOrganization = function() {
    var allDonations = [];

    for (var key in donations) {
      if (donations.hasOwnProperty(key)) {
        var donation = donations[key].name;
        allDonations.push(donation);
      }
    }
    var data = {
        name: ctrl.organization.name,
        description: ctrl.organization.description,
        address: ctrl.organization.address,
        donations: allDonations.join("/r/n")
    };
    console.log(data)

    OrganizationService.createOrganization(data);
    $state.go('home.organizations');
  };

	ctrl.addNewDonation = function() {
	  var newDonation = ctrl.donations.length+1;
	  ctrl.donations.push({name: ''});
  };

  ctrl.removeDonation = function() {
	    var lastItem = ctrl.donations.length-1;
	    ctrl.donations.splice(lastItem);
	  };

}


angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
