module.exports = function(grunt){
	grunt.initConfig({
		
		less: {
			development: {
				files: {
					"css/style.css": "assets/css/style.less"
				}
			}
		},
		watch:{
			css:{
				files: ['assets/css/*.less'],
				tasks: ['less:development'],
			},
			js:{
				files: ['js/app.js','js/controllers/*.js'],
				tasks: ['concat:development']
			}
		},
		concat:{
			development:{
				banner: '//hola',
				src: ['js/app.js', 'js/controllers/*.js'],
				dest: 'app.js'
			}
		}
			
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
};