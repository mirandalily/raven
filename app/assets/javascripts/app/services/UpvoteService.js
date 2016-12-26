function UpvoteService($http) {

  this.createUpvote = function(data) {
    $http.post('http://localhost:3000/organizations', data)
  };

}

angular
   .module('app')
   .service('UpvoteOrganization', UpvoteOrganization);
