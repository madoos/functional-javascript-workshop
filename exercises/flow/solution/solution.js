const compose = require("../../compose/solution/solution")
const flip = require("../../flip/solution/solution")

const flow = flip(compose)

module.exports = flow
