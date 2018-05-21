### map Object Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MAP OBJECT
# Seguir instrucciones
```

--

Implementar la función map para objectos.

--

```javascript
const concatValueKey = (value, key, object) => `${key}-${value}`
mapObject(concatValueKey, { a: 1, b: 2 }) // { a: "a-1", b: "b-2"}
```

--

Solución:

```javascript
function mapObject(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[key] = fn(obj[key], key, obj)
    return mapped
  }, {})
}
```
