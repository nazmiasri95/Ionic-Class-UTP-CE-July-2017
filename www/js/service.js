app
	.factory('dataService', function() {

		var data = [{
			id: 1,
			name: "Roti Canai Kosong",
			image: "http://www.rotinrice.com/wp-content/uploads/2011/04/RotiCanai-1.jpg",
			author: "Abu",
			date: "22nd Oct 2019",
			description: "This is roti canai, obviously",
			recipe: "Here is the recipe"
		},{
			id: 2,
			name: "Nasi Goreng",
			image: "http://www.recipetineats.com/wp-content/uploads/2016/03/Nasi-Goreng_1_landscape-680x486.jpg",
			author: "Bakar",
			date: "23nd Oct 2019",
			description: "This is Nasi Goreng, obviously",
			recipe: "Here is the recipe"
		}];


		return {
			getAllRecipe: function() {
				return data;
			},
			getRecipeById: function($id) {
				return data[$id - 1];
			}
		};

	})