describe("puzzle service", function () {
	var service;

	beforeEach(function () {
		module("lang-puzzle");

	});

	beforeEach(inject(function ($rootScope, $controller, $injector) {
		service = $injector.get("puzzleService");
	}));

	describe("language", function(){
		it("get language", function(){
			var lang = {
				id : 1,
				name : "test",
				words : []
			}
			service.languages = [];			
			service.languages.push(lang);
			var result = service.getLanguage(lang.name);			
			expect(result.name).toBe("test");
		});
		
		
		it("add language", function(){		
			var name = "spanish";		
			service.addLanguage(name);			
			var lang = service.getLanguage(name);			
			expect(lang).not.toBe(null);			
			expect(lang.name).toBe(name);		
		});
	});


});
