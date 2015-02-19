'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        eslint: {
            all: {
                src: [
                    'Gruntfile.js',
                    'lib',
                    'test',
                ],
            },
        },

        jscs: {
            all: {
                src: [
                    'Gruntfile.js',
                    'lib/**/*.js',
                    'test/**/*.js',
                ],
                options: {
                    config: '.jscsrc',
                },
            },
        },

        // Unit tests.
        mochaTest: {
            all: {
                options: {
                    reporter: 'spec',
                },
                src: ['test/*.spec.js'],
            },
        },
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('lib/rules');

    // Load all grunt rules matching the `grunt-*` pattern.
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('lint', [
        'eslint',
        'jscs',
    ]);

    grunt.registerTask('test', ['mochaTest']);

    // By default, lint and run all tests.
    grunt.registerTask('default', [
        'lint',
        'test',
    ]);
};
