const runner = require('../runner');

module.exports = runner.custom(function(map, fn, list) {
    return map(fn, list);
})(n => n + 1, [1, 2, 3]);
