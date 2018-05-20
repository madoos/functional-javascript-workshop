module.exports = function map(fn, array) {
    const [first, ...rest] = array;
    return first === undefined ? [] : [fn(first), ...map(fn, rest)];
};
