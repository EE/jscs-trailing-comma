'use strict';

var setupRule = require('../common/setup-rule');

module.exports = setupRule('disallowTrailingComma', {
    requireComma: false,
});
