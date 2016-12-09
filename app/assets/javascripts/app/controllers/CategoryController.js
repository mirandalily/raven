function CategoryController(CategoryService, $stateParams, Auth) {
  var ctrl = this;

  CategoryService.getCategory($stateParams.id).then(function(resp){
    ctrl.categories = resp.data;
  });
}

angular
  .module('app')
  .controller('CategoryController', CategoryController);
