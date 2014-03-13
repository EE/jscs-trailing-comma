'use strict';

var setupRule = require('../common/setup-rule');

module.exports = setupRule('disallowTrailingCommaInCollapsedLiterals', {
    requireComma: false,
    collapsed: true,
});
