const { curry, pipe } = require("./src/core")
const { reduce, pluck, get, filter, map } = require("./src/utils")

// add :: Number -> Number -> Number
const add = curry((a, b) => a + b)

// groupBy :: (a -> String) -> [a] -> { String: [a] }
const groupBy = curry((f, users) => {
  return reduce(
    (grouped, user) => {
      const key = f(user)
      grouped[key] = grouped[key] ? grouped[key].concat(user) : []
      return grouped
    },
    {},
    users
  )
})

// resume :: [Users] -> Number
const sumAdultsAge = pipe(
  pluck("age"),
  filter(age => age >= 21),
  reduce(add, 0)
)

// program :: [Users] -> { String: Number }
const program = pipe(
  groupBy(get("type")),
  map(sumAdultsAge)
)

module.exports = program
