
function ShowOrganizationController($stateParams, $http, $location, $state, Auth, OrganizationService, CommentService) {
  console.log('ShowOrganizationController is working');
  var ctrl = this;

  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });


  OrganizationService.getOrganization($stateParams.id)
    .then(function(resp){
      ctrl.organization = resp.data;
      console.log(ctrl.organization.donations);
  });

  ctrl.comment = new CommentService();

  ctrl.stringify = function(obj) {
			return JSON.stringify(obj);
		}

  ctrl.addComment = function(organization) {
    if (ctrl.user) {
      ctrl.comment.user_id = ctrl.user.id
    }
    ctrl.comment.organization_id = organization.id
    ctrl.comment.$save(function() {
      ctrl.organization.comments = ctrl.comment.comments
      console.log(ctrl.organization.comments)
      $state.reload(); 
      ctrl.organization.comments.push(ctrl.comment);
    });
  }

}

angular
  .module('app')
  .controller('ShowOrganizationController', ShowOrganizationController);
