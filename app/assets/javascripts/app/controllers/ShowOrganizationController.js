
function ShowOrganizationController($stateParams, $http, $location, $state, Auth, OrganizationService, CommentService) {
  console.log('ShowOrganizationController is working');

  console.log($stateParams);
  var ctrl = this;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });


  OrganizationService.getOrganization($stateParams.id)
    .then(function(resp){
      ctrl.organization = resp.data;
  });

  CommentService.getComments($stateParams.id)
    .then(function(resp) {
      ctrl.comments = resp.data;
    });

  ctrl.addComment = function(organization) {
    if (ctrl.user) {
      ctrl.comment.user_id = ctrl.user.id
    }
    ctrl.comment.organization_id = organization.id
    ctrl.comment.$save(function() {
      $state.go($state.current, {}, { reload: true });
    });
  }

}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
