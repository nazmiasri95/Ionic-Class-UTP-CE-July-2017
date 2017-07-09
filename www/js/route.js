app

	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("main", {
				url: "/main",
				templateUrl: "templates/main.html",
				controller: "MainCtrl"
			})

			.state("recipe", {
				url: "/recipe",
				templateUrl: "templates/recipe.html",
				controller: "RecipeCtrl"
			})

		$urlRouterProvider.otherwise("/main");
	})