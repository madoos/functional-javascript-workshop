function fizzbuzz() {
  const result = []
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz")
    } else if (i % 3 === 0) {
      result.push("fizz")
    } else if (i % 5 === 0) {
      result.push("buzz")
    } else {
      result.push(i)
    }
  }
  return result
}

function range(start, end) {
  const list = []
  for (let i = start; i <= end; i++) list.push(i)
  return list
}

console.log(fizzbuzz(range(1, 100)))
