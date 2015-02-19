'use strict';

var setupRule = require('../common/setup-rule');

module.exports = setupRule('requireTrailingCommaInCollapsedLiterals', {
    requireComma: true,
    collapsed: true,
});
