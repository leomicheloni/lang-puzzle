//main service, controls all game logic
app.factory("puzzleService", function () {

	return {

		languages : [],

		getLangMaxId : function () {
			if(this.languages.length == 0) return 0;
			
			this.languages.sort(function (a, b) {
				a.id > b.id;
			});

			return this.languages[this.languages.length - 1].id;
		},

		newLang : function (name) {
			var maxId = this.getLangMaxId();
			return {
				id : maxId + 1,
				name : name,
				words : []
			}
		},

		addLanguage : function (name) {
			var newLang = this.newLang(name);
			this.languages.push(newLang);
		},

		getLanguage : function (name) {
			return this.languages.filter(function (item) {
				item.name == name;
			})[0];

		}

	};
});
