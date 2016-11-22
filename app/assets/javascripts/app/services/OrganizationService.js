function OrganizationService($http) {

  var organization = $http('http://localhost:3000/organizations/:id.json', {id: '@id'},
    {update: {method: 'PUT'}
  });

  return organization;

}

angular
  .module('app')
  .factory('OrganizationService', OrganizationService)
