module.exports = function debounce(fn, ms, immediate = false) {
    let timeout;
    return (...args) => {
        const later = () => {
            timeout = null;
            if (!immediate) fn.apply(null, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, ms);
        if (callNow) fn.apply(null, args);
    };
};
