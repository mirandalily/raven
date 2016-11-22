function ShowOrganizationController(organization, OrganizationService) {
  this.organization = organization.data;


}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
