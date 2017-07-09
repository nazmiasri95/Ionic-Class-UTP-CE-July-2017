app

	.controller("MainCtrl", ["$scope", "dataService", function ($scope, dataService) {

		$scope.foods = dataService.getAllRecipe();

		console.log($scope.foods);

	}])

	.controller("RecipeCtrl", ["$scope", "dataService", function ($scope, dataService) {

		console.log("This is the Recipe Controller");

	}])