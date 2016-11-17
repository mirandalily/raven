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
      var error = "Please ensure all items are filled in";
      alert(error);
    });
  };

}

angular
  .module('app')
  .controller('AuthController', AuthController);
