// grunt watch:js => watches all js changes and generates app.js package for develop proposes
// grunt watch:css => watches all less changes and generates css (not minified, only less compilation)
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		less : {
			development : {
				files : {
					"css/style.css" : "assets/css/style.less"
				}
			}
		},
		watch : {
			css : {
				files : ['assets/css/*.less'],
				tasks : ['less:development'],
			},
			js : {
				files : ['js/app.js', 'js/controllers/*.js', 'js/services/*.js'],
				tasks : ['concat:development']
			}
		},
		concat : {
			development : {
				options:{
					banner : '//<%=pkg.name %> version: <%=pkg.version%> build: <%=grunt.template.today("yyyy-mm-dd")%> \n'
				},
				src : ['js/app.js', 'js/controllers/*.js', 'js/services/*.js'],
				dest : 'app.js'
			},
			prod : {
				src : ['js/app.js', 'js/controllers/*.js'],
				dest : 'app.js'
			}
		},
		uglify : {
			rc : {
				files : {
					'app.js' : ['js/*.js', 'js/controllers/*.js', 'js/services/*.js']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

};
