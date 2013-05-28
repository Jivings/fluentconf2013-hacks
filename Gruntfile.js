module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		exec: {
			server: {
				cmd: 'node server/server.js'
			}
		},
		ngtemplates: {
            bookshelf: {
                options: {
                    prepend:  '/static/',  // (Optional) Prepend path to $templateCache ID
                    module:   'bookshelf'               // (Optional) The module the templates will be added to
                },
                src:        './templates/bookshelf/ngs/**.ng',
                dest:       './app/bookshelf/templates/cache.js'
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.registerTask("server", "Start server.", function () {
		grunt.log.writeln("Starting server...");
		grunt.task.run("exec:server");
	});

	grunt.registerTask('default', ['ngtemplates', 'server']);

};