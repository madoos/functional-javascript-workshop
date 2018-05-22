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
