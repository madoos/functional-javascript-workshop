# Tarea

Implementar la función de orden superior apply.

## Argumentos

* función: (a, b) => a + b

## Conditions

* recibe como argumento una función
* retorna una función
* ejecuta la función con los argumentos pasados en la primera invocación

## ejemplo

```javascript
const add = (a, b) => a + b

const applied = apply(sum)
const total = applied(1, 2) // 3
```
