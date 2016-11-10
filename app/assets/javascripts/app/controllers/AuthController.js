function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function(user) {
      $scope.user = user;
      $state.go('organizations');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(user) {
      $scope.current_user = user;
      $state.go('/');
    });
  };

}

angular
  .module('app')
  .controller('AuthController', AuthController);
