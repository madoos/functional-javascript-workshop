module.exports = function mapObject(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[key] = fn(obj[key], key, obj)
    return mapped
  }, {})
}
