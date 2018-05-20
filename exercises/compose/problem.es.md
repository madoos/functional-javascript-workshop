# Tarea

Implementar la función compose variadica

## Argumentos

* 5

## Conditions

* recibe como un número 5
* suma 1 al número
* obtiene el doble del número
* convierte el número en string

## ejemplo

```javascript
const plus = x => x + 1
const double = x => x * 2
const toString = x => String(x)

const composed = compose(toString, double, plus)
composed(5) // => "12"
```
