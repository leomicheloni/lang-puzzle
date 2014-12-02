app.controller("agregarIdiomaController", ["$scope", function($scope){
$scope.name = 'english';
	$scope.words = [{ id: 1, description: 'dog' },{ id: 2, description:  'cat'}];
}]);