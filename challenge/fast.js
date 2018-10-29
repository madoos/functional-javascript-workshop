const Benchmark = require("benchmark")
const { map, filter, into, comp } = require("transducers-js")
const curry = f =>
  function curried(...args) {
    const strategies = {
      2: (a, b) => (a && b ? f(a, b) : b => f(a, b))
    }
    return strategies[f.length](...args)
  }

const pipe = (...fns) => fns.reduce((f, g) => x => g(f(x)))
const R = require("ramda")

const curriedMap = curry((f, xs) => {
  const length = xs.length
  const ys = new Array(length)
  for (let i = 0; i < length; i++) ys[i] = f(xs[i])
  return ys
})

curriedFilter = curry((f, xs) => {
  const length = xs.length
  const ys = []
  for (let i = 0; i < length; i++) {
    let v = xs[i]
    if (f(v)) {
      ys[i] = v
    }
  }
  return ys
})

const suite = new Benchmark.Suite()

const src = []
for (let i = 0; i < 1e1; i++) src[i] = i

const inc = n => n + 1
const isEven = n => n % 2 == 0

////////////////////////////////////

const nativeProgram = xs => xs.map(inc).filter(isEven)

const fpProgram = pipe(
  curriedMap(inc),
  curriedFilter(isEven)
)

const xf = comp(filter(isEven), map(inc))
const transducerProgram = xs => into([], xf, xs)

const forProgram = src => {
  let result = new Array(src.length)
  for (let i = 0; i < src.length; i++) {
    let n = inc(i)
    if (isEven(n)) {
      result[i] = n
    }
  }
  return result
}

const ramdaProgram = R.pipe(
  R.map(R.add(1)),
  R.filter(isEven)
)

//////////////////////////////////////

suite
  .add("fp nativeProgram", function() {
    return nativeProgram(src)
  })
  .add("fpProgram", function() {
    return fpProgram(src)
  })
  .add("transducerProgram", function() {
    return transducerProgram(src)
  })
  .add("for loop", function() {
    return forProgram(src)
  })
  .add("Ramda Program", function() {
    return ramdaProgram(src)
  })
  .on("cycle", function(event) {
    console.log(String(event.target))
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"))
  })
  .run()
