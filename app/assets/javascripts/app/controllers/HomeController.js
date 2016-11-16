function HomeController($scope, Auth, $state){
  $scope.signedIn = Auth.isAuthenticated;
  $scope.currentPath = $state;
}
angular
  .module('app')
  .controller('HomeController', HomeController);
