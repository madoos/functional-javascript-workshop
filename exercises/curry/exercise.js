const runner = require("../runner")
const add = (a, b) => a + b
const result = {}

module.exports = runner.custom(function(curry, add) {
  const addCurrified = curry(add)
  const isCurrified = typeof addCurrified === "function"

  try {
    return {
      isCurrified,
      curryResult: addCurrified(1)(2),
      result: addCurrified(1, 2)
    }
  } catch (e) {
    return {
      isCurrified,
      result: e.message
    }
  }
})(add)
