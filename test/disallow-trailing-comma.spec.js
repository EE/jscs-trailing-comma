'use strict';

var Checker = require('jscs/lib/checker'),
    testPatterns = require('./lib/test-patterns');

describe('rules/disallow-trailing-comma', function () {
    var checkerContainer = {};
    beforeEach(function () {
        checkerContainer.checker = new Checker();
        checkerContainer.checker.registerRule(new (require('../rules/disallow-trailing-comma'))());
    });

    describe('true', function () {
        beforeEach(function () {
            checkerContainer.checker.configure({
                disallowTrailingComma: true,
            });
        });

        testPatterns.expandedArray(checkerContainer, 'disallow');
        testPatterns.collapsedArray(checkerContainer, 'disallow');

        testPatterns.expandedObject(checkerContainer, 'disallow');
        testPatterns.collapsedObject(checkerContainer, 'disallow');
    });

    describe('inArrays', function () {
        beforeEach(function () {
            checkerContainer.checker.configure({
                disallowTrailingComma: {
                    inArrays: true,
                },
            });
        });

        testPatterns.expandedArray(checkerContainer, 'disallow');
        testPatterns.collapsedArray(checkerContainer, 'disallow');

        testPatterns.expandedObject(checkerContainer, 'not disallow');
        testPatterns.collapsedObject(checkerContainer, 'not disallow');
    });

    describe('inObjects', function () {
        beforeEach(function () {
            checkerContainer.checker.configure({
                disallowTrailingComma: {
                    inObjects: true,
                },
            });
        });

        testPatterns.expandedArray(checkerContainer, 'not disallow');
        testPatterns.collapsedArray(checkerContainer, 'not disallow');

        testPatterns.expandedObject(checkerContainer, 'disallow');
        testPatterns.collapsedObject(checkerContainer, 'disallow');

        testPatterns.sanityTests(checkerContainer);
    });
});
