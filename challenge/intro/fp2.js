const curry = f =>
  function curried(...args) {
    return args.length >= f.length
      ? f(...args)
      : (...rest) => curried(...args, ...rest)
  }

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start)

const pipe = (...fns) => fns.reduce((f, g) => x => g(f(x)))
const map = curry((f, xs) => xs.map(f))
const isDivisibleBy = curry((divider, n) => n % divider === 0)
const and = (pred1, pred2) => value => pred1(value) && pred2(value)
const replaceWhen = (pred, replacement) => value =>
  pred(value) ? replacement : value

const isMultOf3 = isDivisibleBy(3)
const isMultOf5 = isDivisibleBy(5)
const isMultOf3And5 = and(isDivisibleBy(3), isDivisibleBy(5))

const sayBizzbuzz = pipe(
  map(replaceWhen(isMultOf3And5, "fizzbuzz")),
  map(replaceWhen(isMultOf3, "fizz")),
  map(replaceWhen(isMultOf5, "buzz"))
)

console.log(sayBizzbuzz(range(1, 100)))
