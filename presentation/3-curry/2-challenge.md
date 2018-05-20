### curry Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: CURRY
# Seguir instrucciones
```

--

Solución:

```javascript
module.exports = function curry(fn) {
  return function(a, b) {
    if (a === undefined) return fn
    else if (b === undefined) return b => fn(a, b)
    return fn(a, b)
  }
}
```

--

Solución variadica:

```javascript
let curry = fn => { // (1)

   let arity = fn.length; //(2) number of arguments fn expects
   return function curried(…args){ // (3)
     let firstArgs = args.length; // (4)
     if (firstArgs >= arity) { //correct number of arguments

       return fn(...args); // (5)
     } else {
       return (…secondArgs) => { // (6)
          return curried(...[...args, ...secondArgs]); // (7)
       }
     }
   }
}
```

--

## Aplicación parcial

--

Aplicar parcialmente una funcion, significa crear una nueva funcion rellenando previamente alguno de los argumentos de la funcion original.

```javascript
const partial = (f, ...args) => (...moreArgs) => f(...args, ...moreArgs)

const add3 = (a, b, c) => a + b + c
const fivePlus = partial(add3, 2, 3) // (c) => 2 + 3 + c
fivePlus(4) // 9
```

--

Aplicación parcial con bind

```javascript
const add1More = add3.bind(null, 2, 3) // (c) => 2 + 3 + c
```

--

## Aplicación parcial vs curry

* ¿Diferencias?

--

Conclusión
