/*"use strict"

var random = require("../randomizer")
var runner = require("../runner")

var input = random.arrayOfInts(20, 0, 9)

var usedMap = false
var regularMap = Array.prototype.map

Array.prototype.map = function() {
  usedMap = true
  return regularMap.apply(this, arguments)
}

module.exports = runner
  .init(function() {
    usedMap = false
  })
  .wrapUp(function(callback) {
    if (!usedMap) {
      this.emit("fail", this.__("didnt_use_map"))
    } else {
      this.emit("pass", this.__("used_map"))
    }
    callback(null, usedMap)
  })(input)

const map = (fn, [first, ...rest]) =>
  first === undefined ? [] : [fn(first), ...map(fn, rest)]
*/

/**
 * Created by naor on 10/10/13.
 * Migrated by tdd on 03/16/15.
 */
"use strict"

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
