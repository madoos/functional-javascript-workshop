## Poniendo todo junto

--

## Composición

Componer funciones es el acto de poner 2 funciones juntas para formar una tercera funcion donde la salida de una es la entrada de la otra.

--

Entendiendo la composición por medio de HTML:

La composición se comporta de igual manera que nuestro HTML. Nosotros en HTML intentamos crear interfaces complejas por medio de la composición de partes más simples.

--

La composición es el arte de dividir un problema complejo en pequeñas unidades funcionales que puedan juntarse como si de un puzzle se tratase.

--

Este es un proceso manual y poco legible

```javascript
const add5 = a => a + 5
const double = a => a * 2

const add5Double = a => double(add(a))

add5Double(2) // => 14
```

--

Este es un proceso manual y poco legible

```javascript
const q = a => z(y(x(a)))
```

--

En lenguajes funcionales las funciones se pueden componer de forma natural

```haskell
// haskell
let q = x . y . z
q 6
```

--

En JS podemos adquirir este comportamiento implementado la función compose.
Recuerda que la composición se aplica en orden inverso.

```javascript
const q = compose(z, y, x)
q(6)
```

--

```javascript
const compose = (f, g) => x => f(g(x)) // Definicion

const toString = val => val.toString()
const floorAndToString = compose(toString, Math.floor)
floorAndToString(121.212121) // '121'
```
