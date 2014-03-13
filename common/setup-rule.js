'use strict';

var assert = require('assert');

module.exports = function setupRule(ruleName, options) {
    // Are we defining a rule for an expanded or a collapsed case?
    var collapsed = !!options.collapsed,
    // Require or disallow?
        requireComma = !!options.requireComma,
        disallowComma = !requireComma,
    // Should we point to the beginning of a chosen token on error or its end?
    // (if we point to disallowed comma, we want to point to its beginning since its
    // end is in the next line. If we want to enforce the trailing comma and it's missing,
    // we want to point to the end of the previous token, not its beginning)
        pointToTokenStart = disallowComma,
    // The rule to be returned. It's a noop with a proper prototype.
        rule = function () {};

    rule.prototype = {

        configure: function (options) {
            assert(typeof options === 'object', ruleName + ' option requires object value');

            if ('inArrays' in options) {
                assert(
                    options.inArrays === true,
                    ruleName + '.inArrays property requires true value or should be removed'
                );
            }

            if ('inObjects' in options) {
                assert(
                    options.inObjects === true,
                    ruleName + '.inObjects property requires true value or should be removed'
                );
            }

            assert(
                options.inArrays || options.inObjects,
                ruleName + ' must have inArrays or inObjects property'
            );

            this._inArrays = Boolean(options.inArrays);
            this._inObjects = Boolean(options.inObjects);
        },

        getOptionName: function () {
            return ruleName;
        },

        check: function (file, errors) {
            if (this._inArrays) {
                checkType('ArrayExpression', 'array');
            }
            if (this._inObjects) {
                checkType('ObjectExpression', 'object');
            }

            function checkType(type, typeName) {
                file.iterateNodesByType(type, function (node) {
                    var lastTokenBeforeClosingBrace,
                        tokens = file.getTokens(),
                        closingBracketPos = file.getTokenPosByRangeStart(node.range[1] - 1),
                        closingBracket = tokens[closingBracketPos],
                        prevToken = tokens[closingBracketPos - 1];

                    // If the closing bracket is alone in its line this is a expanded case.
                    // If we're not in the case we're testing, this is the end for us.
                    if (collapsed !== (prevToken.loc.start.line === closingBracket.loc.start.line)) {
                        return;
                    }

                    lastTokenBeforeClosingBrace = tokens[closingBracketPos - 1];

                    if ((requireComma && lastTokenBeforeClosingBrace.value !== ',') ||
                        (disallowComma && lastTokenBeforeClosingBrace.value === ',')) {
                        errors.add(
                            collapsed ? 'Collapsed ' : 'Expanded ' +
                                typeName +
                                ' literals should ' +
                                disallowComma ? 'not ' : '' +
                                'have a comma after the last value',
                            lastTokenBeforeClosingBrace.loc[pointToTokenStart ? 'start' : 'end']);
                    }
                });
            }
        },

    };

    return rule;
};
