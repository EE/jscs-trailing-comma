/**
 * jscs-trailing-comma
 * https://github.com/EE/jscs-trailing-comma
 *
 * Author Michał Gołębiowski <m.goleb@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true,
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'rules/**/*.js',
                    'test/**/*.js',
                ],
            },
        },

        jscs: {
            all: {
                src: '<%= jshint.all.src %>',
                options: {
                    config: '.jscs.json',
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
    grunt.loadTasks('rules');

    // Load all grunt rules matching the `grunt-*` pattern.
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', ['mochaTest']);

    // By default, lint and run all tests.
    grunt.registerTask('default', [
        'jshint',
        'jscs',
        'test',
    ]);
};
