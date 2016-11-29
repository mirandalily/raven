function NewOrganizationController(OrganizationService, $state, $location, Auth, $controller){

  var ctrl = this;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  })

  ctrl.addOrganization = function() {
	    var data = {
	    	name: this.name,
	    	description: this.description,
	    	address: this.address,
	    };

	    OrganizationService.createOrganization(data);
	    $state.go('home.organizations');
	  };




}

angular
  .module('app')
  .controller('NewOrganizationController', NewOrganizationController);
