### memoize Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MEMOIZE
# Seguir instrucciones
```

--

Crea una función que memoize el resultado de ejecuciones anteriores.

--

```javascript
function fibonacci(n) {
  if (n === 0 || n === 1) return n
  else return fibonacci(n - 1) + fibonacci(n - 2)
}

const fibonacciMemoized = memoize(fibonacci)

fibonacciMemoized(3) // 6 Calcula una única vez
fibonacciMemoized(3) // 6
```

--

Solución:

```javascript
function memoize(func) {
  const memo = {}
  return function(x) {
    if (x in memo) return memo[x]
    return (memo[x] = func(x))
  }
}
```
