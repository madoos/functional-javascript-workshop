const util = require("util")

const curryN = (arity, fn) => {
  const curried = (...args) => {
    return arity === args.length
      ? fn(...args)
      : (...rest) => curried(...args, ...rest)
  }

  return curried
}

const curry = fn => {
  return curryN(fn.length, fn)
}

const isPromise = value => {
  return typeof value.then === "function" ? true : false
}

const _mapArray = curry((f, xs) => xs.map(f))

const _mapObject = curry((f, x) => {
  return Object.entries(x).reduce((mapped, [key, value]) => {
    mapped[key] = f(value)
    return mapped
  }, {})
})

const isArray = Array.isArray

const map = curry((f, x) => {
  return isArray(x) ? _mapArray(f, x) : _mapObject(f, x)
})

const isFunction = x => typeof x === "function"

const get = curry((path, x) => {
  const _path = isArray(path) ? path : path.split(".")

  try {
    return _path.reduce((child, key) => {
      return child[key]
    }, x)
  } catch (e) {
    return
  }
})

const projection = curry((descriptor, src) =>
  map(getter => {
    return isFunction(getter) ? getter(src) : get(getter, src)
  }, descriptor)
)

const stdout = x => {
  const normalized = util.inspect(x, { showHidden: false, depth: null })
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(normalized)
}

const groupBy = curry((prop, xs) => {
  return xs.reduce((grouped, x) => {
    grouped[x[prop]] = grouped[x[prop]] || []
    grouped[x[prop]].push(x)
    return grouped
  }, {})
})

const flatten = xs => [].concat(...xs)

const reduce = curry((f, id, xs) => xs.reduce(f, id))

const resume = curry((f, xs) => xs.reduce(f))

const identity = x => x

const pipe = (...fns) => fns.reduce((f, g) => x => g(f(x)), identity)

/*
const mapConverge = curry((arrProp, prop, rename, xs) => {
  const data = xs.map(x => {
    return x[arrProp].map(y => {
      y[rename] = x[prop]
      return y
    })
  })

  return [].concat(...data)
})
*/

const mapConverge = curry((arrProp, prop, rename, xs) => {
  let result = []
  for (let i = 0; i < xs.length; i++) {
    let src = xs[i]
    let child = src[arrProp]
    for (let j = 0; j < child.length; j++) {
      let item = child[j]
      item[rename] = src[prop]
      result.push(item)
    }
  }

  return result
})

const pluck = curry((path, xs) => map(item => get(path, item), xs))

const head = xs => xs[0]

const evolve = curry((descriptor, src) => {
  return Object.keys(descriptor).reduce((mapped, key) => {
    mapped[key] = descriptor[key](src)
    return mapped
  }, {})
})

const flip = f => (...args) => f(...args.reverse())

const memoizeWith = curry((k, f) => {
  const cache = {}
  return (...args) => {
    let key = k(...args)
    if (cache[key]) {
      return cache[key]
    }
    let value = f(...args)
    cache[key] = value
    return value
  }
})

const prop = curry((p, obj) => obj[p])
const join = curry((d, xs) => xs.join(d))

module.exports = {
  curryN,
  curry,
  isPromise,
  map,
  isFunction,
  get,
  projection,
  stdout,
  groupBy,
  flatten,
  reduce,
  pipe,
  mapConverge,
  pluck,
  resume,
  head,
  evolve,
  flip,
  memoizeWith,
  prop,
  join
}
