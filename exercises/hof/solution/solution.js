module.exports = function apply(fn) {
  return function(...args) {
    return fn(...args)
  }
}
