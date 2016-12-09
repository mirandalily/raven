function CategoryService($http) {

  this.getCategories = function() {
    return $http.get('http://localhost:3000/categories')
  };

  this.getCategory = function(id) {
    return $http.get('http://localhost:3000/categories/' + id)
  };
}
