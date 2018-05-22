module.exports = function throttle(fn, ms) {
    let wait = false;
    return (...args) => {
        if (wait) {
            return;
        }
        wait = true;
        setTimeout(() => {
            wait = false;
        }, ms);
        return fn(...args);
    };
};
