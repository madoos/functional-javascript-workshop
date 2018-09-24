const { curry, curryN } = require("./core")
const { split, init, map, is } = require("./utils")

// handleType -> ({signature: String, f: (*, ...) -> b, validations: { String: * -> Bool }, args: [*] }) -> String -> Number -> void
const handleType = curry(
  ({ signature, f, validations, args }, expectedType, i) => {
    const isValid = validations[expectedType]
    const param = args[i]

    if (!isValid(param)) {
      throw new Error(
        `the function ${f.name}
            ${f.toString()} 
            does not comply with the signature 
            "${signature}"
            in param number ${i + 1} 
            with value "${args[1]}" 
            and type ${typeof args[1]} 
            `
      )
    }
  }
)

const getBetween = curry((start, end, s) => {
  return s.substring(s.lastIndexOf(start) + 1, s.lastIndexOf(end))
})

const getValidationTypes = signature => {
  const validations = map(s => s.trim(), split("->", signature))
  return init(validations)
}

// String -> (*, -> ... -> *) -> { String: (* -> Bool)} -> (* -> *)
const define = (signature, f, validations) => {
  return curryN(f.length, (...args) => {
    const paramTypes = getValidationTypes(signature)
    paramTypes.forEach(handleType({ signature, f, validations, args }))
    return f(...args)
  })
}

// hasProps :: [String] -> Bool
const hasProps = curry((props, obj) =>
  props.every(key => obj[key] !== undefined)
)

module.exports = {
  define,
  is,
  hasProps
}
