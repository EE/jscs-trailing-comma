'use strict';

var Checker = require('jscs/lib/checker'),
    testPatterns = require('./lib/test-patterns');

describe('rules/require-trailing-comma-in-collapsed-literals', function () {
    var checkerContainer = {};
    beforeEach(function () {
        checkerContainer.checker = new Checker();
        checkerContainer.checker.registerRule(new (require('../rules/require-trailing-comma-in-collapsed-literals'))());
    });

    describe('inArrays', function () {
        beforeEach(function () {
            checkerContainer.checker.configure({
                requireTrailingCommaInCollapsedLiterals: {
                    inArrays: true,
                },
            });
        });

        testPatterns.expandedArray(checkerContainer, 'not require');
        testPatterns.collapsedArray(checkerContainer, 'require');

        testPatterns.expandedObject(checkerContainer, 'not require');
        testPatterns.collapsedObject(checkerContainer, 'not require');
    });

    describe('inObjects', function () {
        beforeEach(function () {
            checkerContainer.checker.configure({
                requireTrailingCommaInCollapsedLiterals: {
                    inObjects: true,
                },
            });
        });

        testPatterns.expandedArray(checkerContainer, 'not require');
        testPatterns.collapsedArray(checkerContainer, 'not require');

        testPatterns.expandedObject(checkerContainer, 'not require');
        testPatterns.collapsedObject(checkerContainer, 'require');

        testPatterns.sanityTests(checkerContainer);
    });
});
