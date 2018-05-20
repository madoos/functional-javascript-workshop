### compose Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: COMPOSE
# Seguir instrucciones
```

--

Implementar la función compose variadica

```javascript
const plus = x => x + 1
const double = x => x * 2
const toString = x => String(x)

const composed = compose(toString, double, plus)
```

--

Solución
