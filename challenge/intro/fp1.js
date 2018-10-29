const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start)

const isMultOf3 = n => n % 3 === 0
const isMultOf5 = n => n % 5 === 0

const and = (pred1, pred2) => {
  return value => {
    return pred1(value) && pred2(value)
  }
}

const replaceWhen = (pred, replacement) => {
  return value => {
    return pred(value) ? replacement : value
  }
}

console.log(
  range(1, 100)
    .map(replaceWhen(and(isMultOf3, isMultOf5), "fizzbuzz"))
    .map(replaceWhen(isMultOf3, "fizz"))
    .map(replaceWhen(isMultOf5, "buzz"))

  //.map(
  //  replaceWhen(replaceWhen(and(isMultOf3, isMultOf5), "fizzbuzz"))
  // )
  //  .map(replaceWhen(isMultOf3, "fizz"))
  //  .map(replaceWhen(isMultOf5, "buzz"))
)
