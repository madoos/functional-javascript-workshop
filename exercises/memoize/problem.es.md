# Tarea

Crear una función que memoize el resultado de ejecuciones anteriores.

## Argumentos

* fibonacci

## Conditions

* Calcula una única vez al ejecución de una función

## ejemplo

```javascript
function fibonacci(n) {
  if (n === 0 || n === 1) return n
  else return fibonacci(n - 1) + fibonacci(n - 2)
}

const fibonacciMemoized = memoize(fibonacci)

fibonacciMemoized(3) // 6 Calcula una única vez
fibonacciMemoized(3)
```
