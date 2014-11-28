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
			}
		}
			
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	
};