# Tarea

Implementar la función flow variadica.
Flow es como compose, la diferencia es que aplica las ejecuciones de izquierda a derecha

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

const x = flow(plus, double, toString)

x(5) // => "12"
```
