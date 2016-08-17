'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    var oldNode = /^v0\./.test(process.version);

    // Support: Node.js <4
    // Skip running tasks that dropped support for Node.js 0.10 & 0.12
    // in those Node versions.
    var runIfNewNode = function (task) {
        return oldNode ? 'print_old_node_message:' + task : task;
    };

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

    // Load grunt tasks from NPM packages
    // Support: Node.js <4
    // Don't load the eslint task in old Node.js, it won't parse.
    require('load-grunt-tasks')(grunt, {
        pattern: oldNode ? ['grunt-*', '!grunt-eslint'] : ['grunt-*'],
    });

    // Supports: Node.js <4
    grunt.registerTask('print_old_node_message', function () {
        var task = [].slice.call(arguments).join(':');
        grunt.log.writeln('Old Node.js detected, running the task "' + task + '" skipped...');
    });

    grunt.registerTask('lint', [
        runIfNewNode('eslint'),
        'jscs',
    ]);

    grunt.registerTask('test', ['mochaTest']);

    // By default, lint and run all tests.
    grunt.registerTask('default', [
        'lint',
        'test',
    ]);
};
