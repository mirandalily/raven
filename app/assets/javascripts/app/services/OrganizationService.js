function OrganizationService($http) {

  var service = {}

  service.getOrganizations = function() {
    return $http({method: 'GET', url: '/organizations'})
  }



  // service.createOrganization = function(data) {
  //   return $http({ method: 'POST', url: '/organizations'})
  // }

  service.createOrganization = function(data) {
    $http.post('http://localhost:3000/organizations', data)
  }

  return service;

}

angular
   .module('app')
   .service('OrganizationService', OrganizationService);
