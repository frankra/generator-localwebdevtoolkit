'use strict';

var proxySnippet = require('grunt-middleware-proxy/lib/Utils').getProxyMiddleware();
var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

module.exports = function(grunt) {
	grunt.config.set('connect',{
		options: {
			port: 9000,
			hostname: 'localhost'
		},
		rules : [
			{from:'^/b', to:'/index.html'}
		],
		server: {
            options :{
				middleware: function (connect, options, middlewares) {
					middlewares.unshift(rewriteRulesSnippet);
					middlewares.unshift(proxySnippet);

					return middlewares;
			    }
            },
            proxies: [
                {
                    context: '/google',
                    host: 'google.com',
                    https: true,
					corpProxy : {
						host : 'proxy',
						port : '8080'
					}
                }
            ]
        }
    });
	grunt.loadNpmTasks('grunt-connect-rewrite');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-middleware-proxy');
};
