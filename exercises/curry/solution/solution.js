module.exports = function curry(fn) {
  return function(a, b) {
    if (a === undefined) return fn
    else if (b === undefined) return b => fn(a, b)
    return fn(a, b)
  }
}
