module.exports = function flip(fn) {
  return function(...args) {
    const reverseArgs = [...args].reverse()
    return fn(...reverseArgs)
  }
}
