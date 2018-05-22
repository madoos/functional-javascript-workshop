const runner = require('../runner');

const identity = x => x;

module.exports = runner.custom(function(debounce, identity) {
    const debouncedIdentity = debounce(identity);
    return debouncedIdentity();
})(identity);
