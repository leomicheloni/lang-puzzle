describe("test1", function () {
	var service;

	beforeEach(function () {
		module("lang-puzzle");

	});

	beforeEach(inject(function ($rootScope, $controller, $injector) {
		service = $injector.get("puzzleService");
	}));

});
