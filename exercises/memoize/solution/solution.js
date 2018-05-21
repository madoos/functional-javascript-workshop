module.exports = function memoize(func) {
  const memo = {}
  return function(x) {
    if (x in memo) return memo[x]
    return (memo[x] = func(x))
  }
}
