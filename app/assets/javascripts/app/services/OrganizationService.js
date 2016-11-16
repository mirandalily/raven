function OrganizationService($resource) {

  var organization = $resource('http://localhost:3000/api/v1/organization/:id.json', {id: '@id'},
    { update: { method: 'PUT' }
  });
  return organization;
}

angular
  .module('app')
  .factory('OrganizationService', OrganizationService)
