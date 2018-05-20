const runner = require("../runner")

const concat = (a, b) => `${a}-${b}`

module.exports = runner.custom(function(flip, concat) {
  const flipped = flip(concat)
  const isFlipped = typeof flipped === "function"

  try {
    return {
      isFlipped,
      result: flipped("a", "b")
    }
  } catch (e) {
    return {
      isFlipped,
      result: e.message
    }
  }
})(concat)
