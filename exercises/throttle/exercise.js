const runner = require('../runner');

const identity = x => x;

module.exports = runner.custom(function(throttle, identity) {
    const throttledId = throttle(identity);
    return throttledId(3);
})(identity);
