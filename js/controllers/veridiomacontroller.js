app.controller("verIdiomaController", ["$scope", "puzzleService", "$routeParams", function ($scope, service, $routeParams) {
			var currentLang = service.getLanguageById($routeParams.id);
			$scope.name = currentLang.name;
		}
	]);
