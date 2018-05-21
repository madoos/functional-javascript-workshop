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
