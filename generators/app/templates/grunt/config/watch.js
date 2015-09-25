'use strict';

module.exports = function(grunt) {
	grunt.config.set('watch',{
        default: {
			files: ['*'],
			tasks: []
		}
    });

	grunt.loadNpmTasks('grunt-contrib-watch');
};
