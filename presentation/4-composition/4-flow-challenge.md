### flow Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: FLOW
# Seguir instrucciones
```

--

Implementar la función flow variadica.
Flow es como compose, la diferencia es que aplica las ejecuciones de izquierda a derecha

```javascript
const plus = x => x + 1
const double = x => x * 2
const toString = x => String(x)

const flow = flow(plus, double, toString)
```

--

Solución

```javascript
const flow = flip(compose)
```

--

### conclusión
