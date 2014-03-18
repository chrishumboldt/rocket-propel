module.exports = function(grunt) {

	// Load NPM tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
	
	// Initialize config
	grunt.initConfig({
		// Package
		pkg: grunt.file.readJSON('package.json'),
		// SASS
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/blueplate.css': 'sass/blueplate.scss',
					'css/test.css': 'sass/test.scss'
				}
			}
		}, 
		// End of SASS
		// Watch
		watch: {
			// CSS
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			// End of CSS
			// Live reload
			options: {
				// livereload: true,
		    } 
		    // End of live reload
		} 
		// End of watch
	});
	// End of initialize config
}