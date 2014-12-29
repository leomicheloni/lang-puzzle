app.controller("verIdiomasController", ["$scope", "puzzleService", function ($scope, service) {
			$scope.languages = service.getLanguages();
		}
	]);
