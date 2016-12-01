function OrganizationService($http) {

  var service = {}

  service.getOrganizations = function() {
    return $http({method: 'GET', url: '/organizations'})
  }



  service.createOrganization = function(data) {
    return $http({ method: 'POST', url: '/organizations'})
  }

  return service;

}

angular
   .module('app')
   .service('OrganizationService', OrganizationService);
