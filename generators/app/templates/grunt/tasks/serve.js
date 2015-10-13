module.exports = function (grunt) {
	grunt.registerTask('serve', [
		'configureRewriteRules:server',
		'setupProxies:server',
		'connect:server',
        'watch:default'
	]);
};
