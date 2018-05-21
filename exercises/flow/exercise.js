const runner = require("../runner")

const plus = x => x + 1
const double = x => x * 2
const toString = x => String(x)

module.exports = runner.custom(function(flow, fns) {
  const flowed = flow(...fns)
  const isFlow = typeof flowed === "function"

  try {
    return {
      isFlow,
      result: flowed(5)
    }
  } catch (e) {
    return {
      isFlow,
      result: e.message
    }
  }
})([plus, double, toString])
