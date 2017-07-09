## This code is part of the project for Ionic Class UTP CE July 2017

## Steps how to initialize an Ionic Project :

### 1. Three Files inside js folder :
		controller.js
		service.js
		route.js

### 2. Create a new folder inside www/ :
    templates/

### 3. Inside templates folder, create files :
    main.html (first page)
    recipe.html (second page)
    (you can add more if you want, just make sure add controller and route)

### 4. Go to index.html, and add the js that you created below the app.js :
    <script src="js/controller.js"></script>
    <script src="js/route.js"></script>
    <script src="js/service.js"></script>

### 5. Inside ion-pane in index.html, remove everythings and place this :
	    <ion-nav-bar class="bar-royal" align-title="center">
        <ion-nav-back-button></ion-nav-back-button>
        <ion-nav-view></ion-nav-view>
      </ion-nav-bar>

### 6. Inside the app.js, declare the angular module with a variable :
      var app = angular.module ....

### 7. Inside the controller.js, initialize the controller :
      .controller("MainCtrl", ["$scope", function ($scope) {

        console.log("This is the Main Controller");

      }])

### 8. Inside the route.js, initialize it with :
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

### 9. Inside the service.js, initialize it with :
      app
      .factory('dataService', function() {

        return {
          
        };

      })

### 10. Inside the main.html
      <ion-view view-title="Main page">
        <ion-content padding="true" class="note-content">
          <div class="row">

          <!-- Content goes here -->


          </div>
        </ion-content>
      </ion-view>
