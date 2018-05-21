## Point free style

--

Poner las funciones en el lugar más conveniente

--

Es un estilo de escribir funciones donde la definicion de la funcion no identifica de forma explicita los argumentos utilizados. Este estilo usualmente requiere currying o otra Funcion de Orden Superior. Este estilo de programacion tambien es conocido como Programacion Tacita.

```javascript
const map = fn => list => list.map(fn)
const add = a => b => a + b

const incrementAll = numbers => map(add(1))(numbers)
const incrementAll2 = map(add(1))
```
