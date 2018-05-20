const runner = require("../runner")

const plus = x => x + 1
const double = x => x * 2
const toString = x => String(x)

module.exports = runner.custom(function(compose, fns) {
  const composed = compose(...fns)
  const isComposed = typeof composed === "function"

  try {
    return {
      isComposed,
      result: composed(5)
    }
  } catch (e) {
    return {
      isComposed,
      result: e.message
    }
  }
})([toString, double, plus])
