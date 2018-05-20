### flip Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: FLIP
# Seguir instrucciones
```

--

Solución:

```javascript
function flip(fn) {
  return function(...args) {
    return fn([...args].reverse())
  }
}
```

```javascript
const concat = (a, b) => `${a} ${b}`
const concatReverse = flip(concat)

concat("hello", "world") // => hello world
concatReverse("hello", "world") // word hello
```
