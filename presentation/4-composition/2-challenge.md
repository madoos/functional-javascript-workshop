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

```javascript
function compose(...fns) {
  return function(arg) {
    return fns.reduceRight((result, fn) => fn(result), arg)
  }
}
```

--

La composición es extraña de leer porque se aplica de derecha a izquierda

Es interesante tener una función que la aplique de izquierda a derecha
