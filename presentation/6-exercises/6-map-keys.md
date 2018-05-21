### map keys Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MAP KEYS
# Seguir instrucciones
```

--

Implementar la función mapKeys.

--

```javascript
const toUpper = x => x.toUpperCase()
mapKeys(toUpper, { a: 1, b: 2 }) // { A: 1, B: 2}
```

--

Solución:

```javascript
function mapKeys(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[fn(key)] = obj[key]
    return mapped
  }, {})
}
```
