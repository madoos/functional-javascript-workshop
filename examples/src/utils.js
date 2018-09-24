const { curry, pipe } = require("./core")

// get :: s -> {s: a} -> a  | undefined
const get = curry((prop, obj) => obj[prop])

// last :: [a] -> a | undefined
const last = xs => xs[xs.length - 1]

// init :: [a] -> [a]
const init = xs => xs.slice(0, -1)

// split :: (String | RegExp) -> String -> [String]
const split = curry((separator, xs) => xs.split(separator))

// is :: (* -> {*}) -> Boolean
const is = curry(
  (Constructor, instance) => Object(instance).constructor === Constructor
)

// map :: Functor f  => (a -> b) -> f a -> f b
const mapArray = curry((f, xs) => xs.map(f))

// mapObject :: (a -> b) -> Object -> Object
const mapObject = curry((f, obj) => {
  return Object.entries(obj).reduce((mapped, [key, value]) => {
    mapped[key] = f(value)
    return mapped
  }, {})
})

// filter :: (a -> Bool) -> [a] -> [a]
const filter = curry((p, xs) => xs.filter(p))

// reduce :: ((a, b) -> a) -> b -> [a] -> a
const reduce = curry((f, id, xs) => xs.reduce(f, id))

// isObject :: a -> Bool
const isObject = is(Object)

// map :: Functor f => (a -> b) -> f a -> f b
const map = curry((f, functor) => {
  return Array.isArray(functor) ? mapArray(f, functor) : mapObject(f, functor)
})

// pluck :: String -> [{ String: a}] -> [a]
const pluck = pipe(
  get,
  map
)

module.exports = {
  last,
  init,
  split,
  is,
  map,
  filter,
  reduce,
  isObject,
  pluck,
  get
}
