var app = angular.module("lang-puzzle", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "mainController",
		templateUrl: "./templates/menu.html"
	});

	$routeProvider.when("/jugar", {
		controller: "jugarController",
		templateUrl: "./templates/jugar.html"
	});

	$routeProvider.when("/verIdiomas", {
		controller: "verIdiomasController",
		templateUrl: "./templates/verIdiomas.html"
	});

	$routeProvider.when("/agregarIdioma", {
		controller: "agregarIdiomaController",
		templateUrl: "./templates/agregarIdioma.html"
	});
	
});

app.controller("mainController", function($scope){
	
});

app.controller("jugarController", function($scope){
	
});

app.controller("agregarIdiomaController", function($scope){
	
});

app.controller("verIdiomasController", function($scope){
	
});
	
	
	
	


