module.exports = function mapValues(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[key] = fn(obj[key])
    return mapped
  }, {})
}
