// curryN ::  Number → (* → a) → (* → a)
const curryN = (n, f) =>
  function curried(...args) {
    return args.length >= n
      ? f(...args)
      : (...rest) => curried(...args, ...rest)
  }

// curry :: (* → a) → (* → a)
const curry = f => curryN(f.length, f)

// compose2 :: (b -> c) -> (a -> b) -> (a -> c)
const compose2 = (f, g) => x => f(g(x))

// identity :: a -> a
const identity = x => x

// compose :: (b -> c) -> (a -> b) -> ... -> (a -> *)
const compose = (...fns) => fns.reduce(compose2, identity)

// flip :: (a -> b -> c) -> (b -> a -> c)
const flip = f => (...args) => f(...args.reverse())

// pipe :: (a -> b) -> (b -> c) -> ... (a -> *)
const pipe = flip(compose)

module.exports = {
  curryN,
  curry,
  compose,
  identity,
  flip,
  pipe
}
