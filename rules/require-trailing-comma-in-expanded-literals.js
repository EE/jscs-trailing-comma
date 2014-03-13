'use strict';

var setupRule = require('../common/setup-rule');

module.exports = setupRule('requireTrailingCommaInExpandedLiterals', {
    requireComma: true,
    collapsed: false,
});
