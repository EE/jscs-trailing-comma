'use strict';

var setupRule = require('../common/setup-rule');

module.exports = setupRule('disallowTrailingCommaInExpandedLiterals', {
    requireComma: false,
    collapsed: false,
});
