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

  this.update = function(organization) {
    $http.put('http://localhost:3000/organizations/' + organization.id, organization)
  }

}

angular
   .module('app')
   .service('OrganizationService', OrganizationService);
