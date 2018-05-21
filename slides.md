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

### Implementar map

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

### Implementar filter

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

### Implementar reduce

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
