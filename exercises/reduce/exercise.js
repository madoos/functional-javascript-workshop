const runner = require('../runner');
const add = (a, b) => a + b;

module.exports = runner.custom(function(reduce, fn, base, list) {
    return reduce(fn, base, list);
})(add, 0, [1, 2, 3]);
