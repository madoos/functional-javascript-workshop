const { curry, pipe } = require("./src/core")
const { reduce, pluck, get, filter, map } = require("./src/utils")
const { is, define, hasProps } = require("./src/validation")

const ALLOWED_TYPES = {
  Number: is(Number),
  Function: is(Function),
  "[user]": xs => xs.every(hasProps(["age", "name", "type"]))
}

const add = define("Number -> Number -> Number", (a, b) => a + b, ALLOWED_TYPES)

const groupBy = define("Function -> [user] -> { String: [a] }", (f, users) => {
  return reduce(
    (grouped, user) => {
      const key = f(user)
      grouped[key] = grouped[key] ? grouped[key].concat(user) : []
      return grouped
    },
    {},
    users
  )
}, ALLOWED_TYPES)

const sumAdultsAge = define("[user] -> Number", pipe(
  pluck("age"),
  filter(age => age >= 21),
  reduce(add, 0)
), ALLOWED_TYPES)

const program = define("[user] -> { String: Number }", pipe(
  groupBy(get("type")),
  map(sumAdultsAge)
), ALLOWED_TYPES)

module.exports = program
