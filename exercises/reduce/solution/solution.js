module.exports = function reduce(fn, basevalue, array) {
    let result = basevalue;
    for (let i = 0; i < array.length; i++) {
        result = fn(result, array[i]);
    }
    return result;
};
