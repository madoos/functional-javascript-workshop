const runner = require("../runner")

const concat = (value, key, object) => `${key}-${value}`

module.exports = runner.custom(function(mapObject, concat) {
  const arg = { a: 1, b: 2, c: 3 }
  try {
    return {
      result: mapObject(concat, arg),
      input: arg
    }
  } catch (e) {
    return {
      result: e.message
    }
  }
})(concat)
