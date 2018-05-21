const runner = require("../runner")

let times = 0

function fibonacci(num) {
  times++
  var a = 1,
    b = 0,
    temp

  while (num >= 0) {
    temp = a
    a = a + b
    b = temp
    num--
  }

  return b
}

module.exports = runner.custom(function(memoize, fibonacci) {
  const memorized = memoize(fibonacci)
  const isMemorized = typeof memorized === "function"

  try {
    memorized(6)
    return {
      isMemorized,
      result: memorized(6),
      times: times,
      input: 6
    }
  } catch (e) {
    return {
      isMemorized,
      result: e.message
    }
  }
})(fibonacci)
