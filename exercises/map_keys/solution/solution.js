module.exports = function mapKeys(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[fn(key)] = obj[key]
    return mapped
  }, {})
}
