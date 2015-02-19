'use strict';

module.exports = function (conf) {
    conf.registerRule(require('./rules/disallow-trailing-comma-in-collapsed-literals'));
    conf.registerRule(require('./rules/require-trailing-comma-in-collapsed-literals'));
    conf.registerRule(require('./rules/disallow-trailing-comma-in-expanded-literals'));
    conf.registerRule(require('./rules/require-trailing-comma-in-expanded-literals'));
};
