const runner = require("../runner")

const toUpper = x => x.toUpperCase()

module.exports = runner.custom(function(mapKeys, toUpper) {
  const arg = { a: 1, b: 2, c: 3 }
  try {
    return {
      result: mapKeys(toUpper, arg),
      input: arg
    }
  } catch (e) {
    return {
      result: e.message
    }
  }
})(toUpper)
