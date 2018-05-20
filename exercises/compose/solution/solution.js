module.exports = function compose(...fns) {
  return function(arg) {
    return fns.reduceRight((result, fn) => fn(result), arg)
  }
}
