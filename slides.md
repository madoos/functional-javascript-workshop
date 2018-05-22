## Programación funcional en JS

Objetivo:

* Entender los principios core de FP
* Hacer ejercicios prácticos para descubrir cómo facilitan algunas tareas

--

Preparar entorno:

```bash
npm i -g madoos-fp-js-workshop
```

Crear un directorio de trabajo:

```bash
mkdir js-fp
cd js-fp
```

Obtener retos:

```bash
madoos-fp-js-workshop
```

Verificar resultados:

```bash
madoos-fp-js-workshop verify <FILE>
```

--
![picture](http://www.relatably.com/m/img/functional-programming-memes/59796931.jpg)

--

![picture](https://i.redditmedia.com/Twzjjx58KwIdC1lBcQwL4DUHdVXWIplxxjr6w2bm8BA.png?s=88f06d0dff04efd9327691a559e8055c)

--

![picture](http://www.relatably.com/m/img/functional-programming-memes/2d71cb0f32d3577dd9d7c79faa988291864660673a9d974edbef9e0549cac9c7.jpg)

--

![picture](http://www.relatably.com/m/img/functional-programming-memes/a0029dd1d26fc9b49d8898c4158f81dc11d9b3956413e468d06fcf014b118135.jpg)

---
## Qué es la programación funcional

Paradigma basado en programar con funciones

--

## Principios básicos

*   Funciones como ciudadanos de primera clase
*   Funciones puras (sin efectos secundarios)
*   Datos inmutables

--

### Las funciones son ciudadanos de primera clase

Las funciones son como cualquier otro tipo de datos del lenguage.
Pueden almacenarse en variables, tomar funciones como argumento y
retornar funciones.

```javascript
const filter = (predicate, xs) => {
    const result = [];
    for (let idx = 0; idx < xs.length; idx++) {
        if (predicate(xs[idx])) {
            result.push(xs[idx]);
        }
    }
    return result;
};
```

--

### Funciones puras

Una funcion es pura si el valor de retorno es determinado solamente por sus valores de entrada, y no produce efectos secundarios.

```javascript
// impure
const add = (x, y) => {
    launchMissiles();
    return x + y;
};

// pure
const add = (x, y) => x + y;
```

--

### Ventajas de las funciones puras

--

### Ventajas de las funciones puras

*   simples
*   fáciles de testear (sin mocks)
*   predecibles
*   permiten memoize al tener transparencia referencial

--

### Datos inmutables

```javascript
const array = [1, 2, 3];

// mutable
array.push(4);

//immutable
const newArray = array.concat(4);
```

--

### Ventajas de los datos inmutables

--

### Ventajas de los datos inmutables

*   Evitar efectos inesperados

--

## FP vs Imperativo

--

challenge

--

Sumar la edad de los usuarios adultos:

```javascript
const users = [
    {
        name: 'Jesús',
        age: 27
    },
    {
        name: 'María',
        age: 33
    },
    {
        name: 'Sara',
        age: 34
    },
    {
        name: 'Pedro',
        age: 15
    }
];
```

--

Imperativo:

```javascript
let total = 0;
const adults = [];

for (let user of users) {
    if (user.age > 18) {
        adults.push(user);
    }
}

for (let adult of adults) {
    total += adult.age;
}

console.log(total); // => 94
```

--

FP:

```javascript
const isAdult = user => user.age > 18;
const prop = key => obj => obj[key];
const add = (a, b) => a + b;

const total = users
    .filter(isAdult)
    .map(prop('age'))
    .reduce(add, 0); // => 94
```

--
### high order function Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: HPF
# Seguir instrucciones
```

--

Solución:

```javascript
const apply = fn => args => fn(...args)
```

--

Conclusión

---
## Operaciones sobre listas

### Obtener un array a partir de otro array

```javascript
const people = [
    { name: 'Marcos', age: 1 },
    { name: 'Laura', age: 25 },
    { name: 'Luis', age: 35 },
    { name: 'Javi', age: 27 }
];

let ages = [];
for (let i = 0; i < people.length; i++) {
    ages.push(people[i].age);
}
```

--

### Map

```javascript
const people = [
    { name: 'Marcos', age: 1 },
    { name: 'Laura', age: 25 },
    { name: 'Luis', age: 35 },
    { name: 'Javi', age: 27 }
];

//Array.map
const ages = people.map(person => person.age);

//map como función
const ages = map(person => person.age, people);
```

--

### Map challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MAP
# Seguir instrucciones
```

```javascript
const map = (fn, array) => {
    //???
};
```

--

### Implementaciones de map

```javascript
//Imperativa
const map = (fn, array) => {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        result.push(fn(array[i]));
    }
    return result;
};

//Recursiva
const map = (fn, array) => {
    const [first, ...rest] = array;
    return first === undefined ? [] : [fn(first), ...map(fn, rest)];
};
```

--

### Eliminar elementos de un array

```javascript
const people = [
    { name: 'Marcos', age: 1 },
    { name: 'Laura', age: 25 },
    { name: 'Luis', age: 35 },
    { name: 'Javi', age: 27 }
];

let adults;
for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
        ages.push(people[i].age);
    }
}
```

--

### Filter

```javascript
const people = [
    { name: 'Marcos', age: 1 },
    { name: 'Laura', age: 25 },
    { name: 'Luis', age: 35 },
    { name: 'Javi', age: 27 }
];

let adults = [];
for (let i = 0; i < people.length; i++) {
    if (array[i].age > 18) {
        result.push(array[i]);
    }
}
```

--

```javascript
const people = [
    { name: 'Marcos', age: 1 },
    { name: 'Laura', age: 25 },
    { name: 'Luis', age: 35 },
    { name: 'Javi', age: 27 }
];

const adults = people.filter(person => person.age > 18);
```

--

### Filter challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: FILTER
# Seguir instrucciones
```

```javascript
const filter = (predicate, array) => {
    //???
};
```

--

### Implementaciones de filter

```javascript
const filter = (predicate, array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
```

--

### Obtener un valor a partir de un array

```javascript
const people = [
    { name: 'Marcos', age: 1 },
    { name: 'Laura', age: 25 },
    { name: 'Luis', age: 35 },
    { name: 'Javi', age: 27 }
];

let totalAge;
for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}
```

--

### Reduce

```javascript
const people = [
    { name: 'Marcos', age: 1 },
    { name: 'Laura', age: 25 },
    { name: 'Luis', age: 35 },
    { name: 'Javi', age: 27 }
];

const totalAge = people.reduce((acc, person) => acc + person.age, 0);
```

--

### Reduce challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: REDUCE
# Seguir instrucciones
```

```javascript
const reduce = (fn, base, list) => {
    //???
};
```

--

### Implementaciones de reduce

```javascript
const reduce = (fn, base, list) => {
    let result;
    for (let i = 0; i < list.length; i++) {
        result = fn(result, list[i]);
    }
    return result;
};
```

--

### Implementar filter y map con reduce

--

### Implementar filter y map con reduce

```javascript
const map = (fn, list) =>
    list.reduce((acc, v) => {
        acc.push(fn(v));
        return acc;
    }, []);

const filter = (predicate, list) =>
    list.reduce((acc, v) => {
        if (predicate(v)) {
            acc.push(fn(v));
        }
        return acc;
    }, []);
```

--

### Performance

```javascript
const accounts = [
    { balance: 100, currency: 'EUR', userId: 1 },
    { balance: 300, currency: 'EUR', userId: 2 },
    { balance: 200, currency: 'USD', userId: 1 }
];

const balanceUsd = accounts
    .filter(({ currency: c }) => c === 'USD') //una iteración
    .map(({ balance }) => balance) //otra iteración
    .reduce(add, 0); //y otra iteración :S
```

Operar sobre listas puede tener problemas de
performance:

*   En tiempo, por hacer más de una iteración
*   En espacio, porque se crean arrays intermedios

--

### Performance

Técnicas para mejorar la performance:

*   Lazyness (tiempo y espacio)
*   Structural sharing (espacio)

--

### Performance - Lazyness

Si podemos componer las operaciones sobre listas en una sola,
y ejecutarla sólo cuando sea necesario, ahorraremos tiempo y espacio.

--

### Performance - Lazyness

[Lazy.js](http://danieltao.com/lazy.js/) tiene una API similar a
Underscore/Lodash y nos permite trabajar con secuencias que no se
evalúan hasta que sea necesario.

```javascript
const people = [{name: 'Ana', age: 28}, {name: 'Harold': age: 20}, /*...*/]
const result = Lazy(people)
    .pluck('age')
    .filter(age => age > 18)
    .take(5);
```

--

### Performance - Lazyness

Con ES6 se exponen partes hasta entonces internas del lenguage: símbolos.
Symbol.iterator nos permite crear estructuras que podemos iterar bajo demanda.

```javascript
const Numbers = {
    [Symbol.iterator]: () => {
        let n = 0;
        return {
            next: () => ({ done: false, value: n++ })
        };
    }
};
```

--

### Performance - Structural Sharing

```javascript
const append = (item, array) => {
    //array.push(item) // NO -> se modifica el array in-place
    return [...array, item];
};
```

La inmutabilidad puede tener mala performance:

*   clonamos todo el array para añadir un elemento
*   el recolector de basura tiene que eliminar muchos objetos

--

### Performance - Structural Sharing

Podemos usar estructuras de datos persistentes, que preservan y utilizan
la versión anterior de sí mismas al modificarse

[Inmutable.js](https://facebook.github.io/immutable-js/) las implementa en JS.

```javascript
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + ' vs. ' + map2.get('b'); // 2 vs. 50
```

---
## Curry

--

## Creando funciones a partir de funciones

--

Muchas veces es necesario crear funciones a partir de funciones ya existentes.

```javascript
const prop = (key, obj) => obj[key];
const getAge = user => prop('age', user);

getAge({ age: 30 }); // 30
```

--

Ese es un proceso manual que puede hacer de forma automática.

```javascript
const prop = (key, obj) => obj[key];
const getAge = user => prop('age', user);
const getName = user => prop('name', user);
// ...
```

Si los usuarios tienen muchas propiedades se tendría que escribir una función por cada propiedad.

--

Imagina que las funciones tuvieran otro comportamiento:

Si no se le dan todos los argumentos a una función no se ejecuta,
retorna otra función que espera el siguiente argumento.
Cuando tiene todos los argumentos se ejecuta.

```javascript
const prop = (key, obj) => obj[key]; // necesita 2 argumentos para funcionar

const getAge = prop('age'); // (key) => (user) => user[key]
// retorna una función que ya conoce la propiedad a la que tiene que acceder  y espera el usuario para ejecutarse.

getAge({ age: 88 }); // 88
```

--

Con ese comportamiento podríamos escribir rápidamente funciones derivadas.

```javascript
const getAge = prop('age');
const getName = prop('age');
const getEmail = prop('email');
```

--

En lenguajes funcionales las funciones se comportan exactamente de esa manera, pero en JS no.

--

### ¿Cómo adquirimos ese comportamiento?

--

### Curry

El proceso de convertir una función que toma multiples argumentos en una función que los toma uno cada la vez.

Cada vez que la función es llamada, esta solamente acepta un argumento y retorna una funcion que toma el siguiente argumento y así continúa hasta que se pasen todos los argumentos.

```javascript
const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;

//es equivalente a
const curriedSum = function(a) {
    return function(b) {
        return a + b;
    };
};

curriedSum(40)(2); // 42.
const add2 = curriedSum(2); // (b) => 2 + b

add2(10); // 12
```

--

## Currificando funciones

```javascript
//curry manual para función binaria
const add = (a, b) => {
    if (b === undefined) {
        return b => a + b;
    }
    return a + b;
};

//curry automático
const add = curry((a, b) => a + b);
const numbers = [1, 2, 3, 4];

numbers.map(add(1)); // => [2,3,4,5]
numbers.reduce(add, 0); // => 14
```

--
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
        if (a === undefined) return fn;
        else if (b === undefined) return b => fn(a, b);
        return fn(a, b);
    };
};
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
const partial = (f, ...args) => (...moreArgs) => f(...args, ...moreArgs);

const add3 = (a, b, c) => a + b + c;
const fivePlus = partial(add3, 2, 3); // (c) => 2 + 3 + c
fivePlus(4); // 9
```

--

Aplicación parcial con bind

```javascript
const add1More = add3.bind(null, 2, 3); // (c) => 2 + 3 + c
```

--

## Aplicación parcial vs curry

*   ¿Diferencias?

--

Conclusión

---
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

--
### compose Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: COMPOSE
# Seguir instrucciones
```

--

Implementar la función compose variadica

```javascript
const plus = x => x + 1
const double = x => x * 2
const toString = x => String(x)

const composed = compose(toString, double, plus)
```

--

Solución

```javascript
function compose(...fns) {
  return function(arg) {
    return fns.reduceRight((result, fn) => fn(result), arg)
  }
}
```

--

La composición es extraña de leer porque se aplica de derecha a izquierda

Es interesante tener una función que la aplique de izquierda a derecha

--
### flip Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: FLIP
# Seguir instrucciones
```

--

Solución:

```javascript
function flip(fn) {
  return function(...args) {
    return fn([...args].reverse())
  }
}
```

```javascript
const concat = (a, b) => `${a} ${b}`
const concatReverse = flip(concat)

concat("hello", "world") // => hello world
concatReverse("hello", "world") // word hello
```

--
### flow Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: FLOW
# Seguir instrucciones
```

--

Implementar la función flow variadica.
Flow es como compose, la diferencia es que aplica las ejecuciones de izquierda a derecha

```javascript
const plus = x => x + 1
const double = x => x * 2
const toString = x => String(x)

const flow = flow(plus, double, toString)
```

--

Solución

```javascript
const flow = flip(compose)
```

--

### conclusión

---
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

---
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

--
### once Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: ONCE
# Seguir instrucciones
```

--

Crear una función que evite que otra funcion se ejecute más de una vez

--

```javascript
const debug = x => console.log(x)

const debugOnce = once(debug)

debugOnce(5) // 5
debugOnce(5) // no se ejecuta
```

--

Solución:

```javascript
function once(func) {
  let executed = false
  return function(...args) {
    if (!executed) {
      executed = true
      return func(...args)
    }
  }
}
```

--
### debounce Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: DEBOUNCE
# Seguir instrucciones
```

--

Crea una función que retorne una función que, mientras sea invocada, no
se ejecute. Se ejecutará cuando deje de ser invocada durante `ms` millisegundos.
Si el último argumento (`immediate`) es `true`, se invocará primero y después
dejará de ejecutarse cuando sea invocada.

--

```javascript
const expensiveOnScrollFn = e => {
    //do something on every scroll event
};

const efficientOnScrollFn = debounce(expensiveOnScrollFn, 250);

window.addEventListener('scroll', efficientOnScrollFn);
```

--

Solución:

```javascript
const debounce = (fn, ms, immediate = false) => {
    let timeout;
    return (...args) => {
        const later = () => {
            timeout = null;
            if (!immediate) fn.apply(null, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, ms);
        if (callNow) fn.apply(null, args);
    };
};
```

--
### throttle Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: THROTTLE
# Seguir instrucciones
```

--

Crea una función que retorne una función que solo se ejecute cada `ms` millisegundos.
La primera vez que es invocada debe ejecutarse inmediatamente.

--

```javascript
const apiCall = () => {
    /*call api*/
};
const throttledApiCall = throttle(apiCall, 200);

//se ejecuta una vez cada 200ms
```

--

Solución:

```javascript
function throttle(fn, ms) {
    let wait = false;
    return (...args) => {
        if (wait) {
            return;
        }
        wait = true;
        setTimeout(() => {
            wait = false;
        }, ms);
        return fn(...args);
    };
}
```

--
### map values Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MAP OBJECT
# Seguir instrucciones
```

--

Implementar la función mapValues.

--

```javascript
const double = x => x * 2
mapValues(double, { a: 1, b: 2 }) // { a: 2, b: 4}
```

--

Solución:

```javascript
function mapValues(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[key] = fn(obj[key])
    return mapped
  }, {})
}
```

--
### map keys Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MAP KEYS
# Seguir instrucciones
```

--

Implementar la función mapKeys.

--

```javascript
const toUpper = x => x.toUpperCase()
mapKeys(toUpper, { a: 1, b: 2 }) // { A: 1, B: 2}
```

--

Solución:

```javascript
function mapKeys(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[fn(key)] = obj[key]
    return mapped
  }, {})
}
```

--
### map Object Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: MAP OBJECT
# Seguir instrucciones
```

--

Implementar la función map para objectos.

--

```javascript
const concatValueKey = (value, key, object) => `${key}-${value}`
mapObject(concatValueKey, { a: 1, b: 2 }) // { a: "a-1", b: "b-2"}
```

--

Solución:

```javascript
function mapObject(fn, obj) {
  return Object.keys(obj).reduce((mapped, key) => {
    mapped[key] = fn(obj[key], key, obj)
    return mapped
  }, {})
}
```

---
Muchas gracias!!

![picture](https://s5.eestatic.com/2016/12/16/social/Memes-Humor-Redes_sociales-Internet-La_Jungla_178744040_23538138_1706x960.jpg)

---
