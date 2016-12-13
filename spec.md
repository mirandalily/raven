# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app
- [x] Must contain some sort of nested views
	- all views are nested under the home state which contains the navbar
- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
	- Users can search all recipes, recipes by name, or recipes by ingredients.
	- Pages that display recipes use the orderBy filter to order the recipes in alphabetical order or in reverse most favorited order.
	- Form preview uses the titleize filter to render the recipe name.
- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
	- "Add to Favorites" button on a recipe page adds the recipe to the user's favorite recipes list, and the quantity is updated in the navbar.
	- Users can create new recipes using the new recipes form.
- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
	- Links in the navbar and recipe pages use ui-sref and work properly.
- [x] Data should be validated in Angular before submission
	- Data in the new recipe form are validated before submission using ng-show and error messages dynamically.
- [x] Must talk to the Rails backend using $http and Services
	- The app has a RecipeService and Userservice that gets and posts to the Rails backend.
- [] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

Confirm
- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message
