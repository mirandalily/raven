function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home.organizations');
    }, function (response){
      var error = response.data.error;
      alert(error);
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function (success){
      $state.go('home.organizations');
    }, function (response){
      var error = "Looks like that email is already in use!";
      alert(error);
    });
  };

}

angular
  .module('app')
  .controller('AuthController', AuthController);
