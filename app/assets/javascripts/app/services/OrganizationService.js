function OrganizationService($http) {

  this.getOrganizations = function() {
    return $http.get('http://localhost:3000/organizations/')
  };

  this.getOrganization = function(id) {
    return $http.get('http://localhost:3000/organizations/' + id)
  };

  this.createOrganization = function(data) {
    $http.post('http://localhost:3000/organizations', data)
  };

}

angular
   .module('app')
   .service('OrganizationService', OrganizationService);
