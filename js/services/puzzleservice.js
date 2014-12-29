//main service, controls all game logic
app.factory("puzzleService", function () {

	return {

		languages : [
			{"id": 1, "name": "spanish"}, 
			{"id": 2, "name": "english"}
		],

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
			if(this.getLanguage(name) != null) throw new Error("cannot add " + name + ", a language with the same name already exists");
			var newLang = this.newLang(name);
			this.languages.push(newLang);
		},
		
		getLanguages: function(){
			return this.languages;
		},

		getLanguage : function (name) {
			return this.languages.filter(function (item) {
				return item.name == name;
			})[0];

		}

	};
});
