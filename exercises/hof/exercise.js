const runner = require("../runner")
const add = (a, b) => a + b
const result = {}

module.exports = runner.custom(function(apply, add) {
  const applied = apply(add)
  const isFn = typeof applied === "function"

  try {
    const data = applied(1, 2)
    return {
      isHOF: isFn,
      result: data
    }
  } catch (e) {
    return {
      isHOF: isFn,
      result: e.message
    }
  }
})(add)
