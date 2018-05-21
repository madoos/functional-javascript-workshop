### once Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: ONCE
# Seguir instrucciones
```

--

Crear una función que evite que otra funcion se ejecute más de una vez

--

```javascript
const debug = x => console.log(x)

const debugOnce = once(debug)

debugOnce(5) // 5
debugOnce(5) // no se ejecuta
```

--

Solución:

```javascript
function once(func) {
  let executed = false
  return function(...args) {
    if (!executed) {
      executed = true
      return func(...args)
    }
  }
}
```
