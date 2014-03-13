'use strict';

var assert = require('assert');

// `mode` parameter is one of "require", "not require", "disallow", "not disallow"
// `c` is an object container containing just `checker`; it's needed to be able to pass a checker reference
// instead of value.

module.exports = {
    expandedArray: function expandedArray(c, mode) {
        it('should ' + mode + ' a trailing comma in expanded array definition', function () {
            assert(c.checker.checkString('var a = [\n2,\n"b"\n,3,\n]').getErrorCount() === +(mode === 'disallow'));
            assert(c.checker.checkString('var a = [\n2,\n"b"\n,3\n]').getErrorCount() === +(mode === 'require'));
        });
    },
    collapsedArray: function collapsedArray(c, mode) {
        it('should ' + mode + ' a trailing comma in single-line array definition', function () {
            assert(c.checker.checkString('var a = [2,"b",3,]').getErrorCount() === +(mode === 'disallow'));
            assert(c.checker.checkString('var a = [2,"b",3]').getErrorCount() === +(mode === 'require'));
        });
        it('should ' + mode + ' a trailing comma in multi-line array definition where ' +
            'the closing bracket isn\'t alone in its line', function () {
            assert(c.checker.checkString('var a = [2,\n"b",3,]').getErrorCount() === +(mode === 'disallow'));
            assert(c.checker.checkString('var a = [2,\n"b",3]').getErrorCount() === +(mode === 'require'));
        });
    },

    expandedObject: function expandedObject(c, mode) {
        it('should ' + mode + ' a trailing comma in expanded object definition', function () {
            assert(c.checker.checkString('var a = {\na:2,\nb:"b"\n,\n}').getErrorCount() === +(mode === 'disallow'));
            assert(c.checker.checkString('var a = {\na:2,\nb:"b"\n\n}').getErrorCount() === +(mode === 'require'));
        });
    },
    collapsedObject: function collapsedSingleLineObject(c, mode) {
        it('should ' + mode + ' a trailing comma in single-line object definition', function () {
            assert(c.checker.checkString('var a = {a:2,b:"b",}').getErrorCount() === +(mode === 'disallow'));
            assert(c.checker.checkString('var a = {a:2,b:"b"}').getErrorCount() === +(mode === 'require'));
        });
        it('should ' + mode + ' a trailing comma in multi-line object definition where ' +
            'the closing bracket isn\'t alone in its line', function () {
            assert(c.checker.checkString('var a = {a:2,\nb:"b",}').getErrorCount() === +(mode === 'disallow'));
            assert(c.checker.checkString('var a = {a:2,\nb:"b"}').getErrorCount() === +(mode === 'require'));
        });
    },
};
