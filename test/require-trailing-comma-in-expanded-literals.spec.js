'use strict';

var Checker = require('jscs/lib/checker'),
    testPatterns = require('./lib/test-patterns');

describe('rules/require-trailing-comma-in-expanded-literals', function () {
    var checkerContainer = {};
    beforeEach(function () {
        checkerContainer.checker = new Checker();
        checkerContainer.checker.registerRule(new (require('../rules/require-trailing-comma-in-expanded-literals'))());
    });

    describe('inArrays', function () {
        beforeEach(function () {
            checkerContainer.checker.configure({
                requireTrailingCommaInExpandedLiterals: {
                    inArrays: true,
                },
            });
        });

        testPatterns.expandedArray(checkerContainer, 'require');
        testPatterns.collapsedArray(checkerContainer, 'not require');

        testPatterns.expandedObject(checkerContainer, 'not require');
        testPatterns.collapsedObject(checkerContainer, 'not require');
    });

    describe('inObjects', function () {
        beforeEach(function () {
            checkerContainer.checker.configure({
                requireTrailingCommaInExpandedLiterals: {
                    inObjects: true,
                },
            });
        });

        testPatterns.expandedArray(checkerContainer, 'not require');
        testPatterns.collapsedArray(checkerContainer, 'not require');

        testPatterns.expandedObject(checkerContainer, 'require');
        testPatterns.collapsedObject(checkerContainer, 'not require');
    });
});
