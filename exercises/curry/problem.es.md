# Tarea

Implementar la función de orden superior curry.

## Argumentos

* función: (a, b) => a + b

## Conditions

* recibe como argumento una función
* retorna una función currificada

## ejemplo

```javascript
const add = (a, b) => a + b
const addCurrified = curry(add)

addCurrified(1)(2) // 3
addCurrified(1, 2) // 3
```
