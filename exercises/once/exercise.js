const runner = require("../runner")

const identity = x => x

module.exports = runner.custom(function(once, identity) {
  const identityOnce = once(identity)
  const isIdentityOnce = typeof identityOnce === "function"

  try {
    return {
      isIdentityOnce,
      result1: identityOnce(6),
      result2: identityOnce(6),
      input: 6
    }
  } catch (e) {
    return {
      isIdentityOnce,
      result: e.message
    }
  }
})(identity)
