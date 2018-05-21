### map values Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MAP OBJECT
# Seguir instrucciones
```

--

Implementar la función mapValues.

--

```javascript
const double = x => x * 2
mapValues(double, { a: 1, b: 2 }) // { a: 2, b: 4}
```

--

Solución:

```javascript
function mapValues(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[key] = fn(obj[key])
    return mapped
  }, {})
}
```
