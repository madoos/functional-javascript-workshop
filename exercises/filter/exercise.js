const runner = require('../runner');

module.exports = runner.custom(function(filter, predicate, list) {
    return filter(predicate, list);
})(n => n > 2, [1, 2, 3]);
