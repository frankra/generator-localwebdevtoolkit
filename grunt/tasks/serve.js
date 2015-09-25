module.exports = function (grunt) {
	grunt.registerTask('serve', [
		'configureRewriteRules:server',
		'configureProxies:server',
		'connect:server',
        'watch:default'
	]);
};
