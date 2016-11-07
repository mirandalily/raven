function OrganizationController() {
  var org = this;
  org.name = "Best Friend's Animal Society";

  org.changeName = function() {
    org.name = 'Paws';
  }
}

angular
  .module('app')
  .controller('OrganizationController', OrganizationController)
