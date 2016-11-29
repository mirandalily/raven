function OrganizationService($http) {

  var service = {}

  service.getOrganizations = function() {
    return $http({method: 'GET', url: '/organizations'})
  }
  return service;



  this.createOrganization = function(data) {
    $http.post('http://localhost:3000/organizations', data).then(console.log("successfully created new organization"))
  }

}

angular
   .module('app')
   .service('OrganizationService', OrganizationService);
