function OrganizationService($http) {

  var service = {}

  service.getOrganizations = function() {
    return $http({method: 'GET', url: '/organizations'})
  }
  return service;

}

angular
   .module('app')
   .service('OrganizationService', OrganizationService);
