function CommentService($resource) {

  var comment = $resource('http://localhost:3000/organizations/:id/comments.json', {id: '@organization_id'}
);
return comment;

}

angular
  .module('app')
  .service('CommentService', CommentService);
