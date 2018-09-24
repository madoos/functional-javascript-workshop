const users = require("./users")
const groupUsers = require("./groupUsers")
const groupUsersWithValidation = require("./groupUsersWithValidation")
const { define, is } = require("./src/validation")

console.log(groupUsers(users))
console.log(groupUsersWithValidation(users))

// validation example

const addSignature = "Number -> Number -> Number"
const addDefinition = (a, b) => a + b
const addValidTypes = { Number: is(Number) }

const add = define(addSignature, addDefinition, addValidTypes)
console.log(add(1)(1))

/* 
should throw an error type with message
Error: the function addDefinition
            (a, b) => a + b
            does not comply with the signature
            "Number -> Number -> Number"
            in param number 1
            with value "1"
            and type string

*/
console.log(add("1")(1))
