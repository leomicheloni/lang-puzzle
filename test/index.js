describe("puzzle service", function () {
	var service;

	beforeEach(function () {
		module("lang-puzzle");

	});

	beforeEach(inject(function ($rootScope, $controller, $injector) {
		service = $injector.get("puzzleService");
	}));

	describe("language", function(){
		it("add language", function(){
		
			service.addLanguage("spanish");
			
			var lang = service.getLanguage("spanish");
			
			expect(lang).not.toBe(null);
		
		});
	});


});
