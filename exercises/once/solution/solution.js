module.exports = function once(func) {
  let executed = false
  return function(...args) {
    if (!executed) {
      executed = true
      return func(...args)
    }
  }
}
