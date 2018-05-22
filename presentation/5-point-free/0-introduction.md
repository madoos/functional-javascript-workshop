## Point free style

--

Poner las funciones en el lugar más conveniente

--

Es un estilo de escribir funciones donde la definición de la función no identifica de forma explícita los parámetros utilizados. Este estilo usualmente requiere currying o el uso de una función de Orden Superior. Este estilo de programación también es conocido como Programación Tácita.

```javascript
const map = fn => list => list.map(fn);
const add = a => b => a + b;

const incrementAll = numbers => map(add(1))(numbers);
const incrementAll2 = map(add(1));
```
