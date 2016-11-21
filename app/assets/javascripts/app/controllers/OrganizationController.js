function OrganizationController(organizations) {

  this.organizations = organizations.data


}

angular
  .module('app')
  .controller('OrganizationController', OrganizationController);
