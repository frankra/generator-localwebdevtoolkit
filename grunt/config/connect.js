'use strict';

module.exports = function(grunt) {
	grunt.config.set('connect',{
        server: {
            options: {
                port: 8000,
                base: {
                    path: 'www-root',
                    options: {
                        index: 'somedoc.html',
                        maxAge: 300000
                    }
                }
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-connect');
};
