module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-rquirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['browserify'],
                options: {
                    spawn: false
                }
            }
        },
		browserify: {
            options: {
                bundleOptions: {
                    debug: true
                }
            },
            build: {
                src: ['src/FLUX.js'],
                dest: 'dist/flux.js'
            }
        },
        rquire: {
            build: {
                options: {
                    globals: {
                        'window'  : 'window',
                        'document': 'document',
                        'Math'    : 'Math',
                        'Object'  : 'Object'
                    },
                    universal: 'FLUX',
                    micro_paths: true,
                    safe_undefined: true,
                    main: 'FLUX.js',
                    dest: 'dist/flux.js'
                }
            }
        }
	});

	grunt.registerTask('default', ['browserify', 'watch']);
    grunt.registerTask('rq', ['rquire']);
};