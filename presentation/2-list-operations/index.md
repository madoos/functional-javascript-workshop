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
