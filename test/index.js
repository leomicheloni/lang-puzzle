describe("puzzle service", function () {
	var service;

	beforeEach(function () {
		module("lang-puzzle");

	});

	beforeEach(inject(function ($rootScope, $controller, $injector) {
			service = $injector.get("puzzleService");
		}));

	describe("language", function () {

		beforeEach(function () {
			service.languages = [];
		});

		it("list languages", function () {
			var quantity = 15;

			for (var i = 1; i < quantity+1; i++) {
				service.addLanguage("test_" + i);
			}

			expect(service.languages.length).toBe(quantity);

			expect(service.getLanguage("test_8").id).toBe(8);

		});

		it("avoid duplicates languages", function () {
			var lang = {
				id : 1,
				name : "test",
				words : []
			}

			service.addLanguage(lang);

			expect(function () {
				service.addLanguage(lang);
			}).toThrow();
		});

		it("get language", function () {
			var lang = {
				id : 1,
				name : "test",
				words : []
			}

			service.languages.push(lang);
			var result = service.getLanguage(lang.name);
			expect(result.name).toBe("test");
		});

		it("get language by id", function () {
			var lang = {
				id : 1,
				name : "test",
				words : []
			}

			service.languages.push(lang);
			var result = service.getLanguageById(1);
			expect(result.name).toBe("test");
		});

		it("add language", function () {
			var name = "spanish";
			service.addLanguage(name);
			var lang = service.getLanguage(name);
			expect(lang).not.toBe(null);
			expect(lang.name).toBe(name);
		});

		it("add two languages and find one", function () {
			var name = "spanish";
			service.addLanguage(name);

			var name2 = "english";
			service.addLanguage(name2);

			var lang1 = service.getLanguage(name);
			expect(lang1).not.toBe(null);
			expect(lang1.name).toBe(name);

			var lang2 = service.getLanguage(name2);
			expect(lang2).not.toBe(null);
			expect(lang2.name).toBe(name2);
		});
	});
});
