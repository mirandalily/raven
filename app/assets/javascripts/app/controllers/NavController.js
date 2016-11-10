function NavController($state, $scope, Auth) {
  
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;


}

angular
  .module('app')
  .controller('NavController', NavController);
