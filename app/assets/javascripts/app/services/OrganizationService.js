function OrganizationService($http) {

  this.getOrganizations = function() {
    return $http.get('http://localhost:3000/organizations.json');
  }

  this.getOrganization = function(id) {
    return $http.get('http://localhost:3000/organizations/' + id + '.json')''
  }

}

angular
  .module('app')
  .factory('OrganizationService', OrganizationService)
