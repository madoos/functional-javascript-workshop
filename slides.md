## Qué es la programación funcional

Paradigma basado en programar con funciones

--

## Principios básicos

* Funciones como ciudadanos de primera clase
* Funciones puras (sin efectos secundarios)
* Datos inmutables

--

### Las funciones son ciudadanos de primera clase

Las funciones son como cualquier otro tipo de datos del lenguage.
Pueden almacenarse en variables, tomar funciones como argumento y
retornar funciones.

```javascript
const filter = (predicate, xs) => {
  const result = []
  for (let idx = 0; idx < xs.length; idx++) {
    if (predicate(xs[idx])) {
      result.push(xs[idx])
    }
  }
  return result
}
```

--

### Funciones puras

Una funcion es pura si el valor de retorno es determinado solamente por sus valores de entrada, y no produce efectos secundarios.

```javascript
// impure
const add = (x, y) => {
  launchMissiles()
  return x + y
}

// pure
const add = (x, y) => x + y
```

--

### Ventajas de las funciones puras

--

### Ventajas de las funciones puras

* simples
* fáciles de testear (sin mocks)
* predecibles
* permiten memoize al tener transparencia referencial

--

### Datos inmutables

```javascript
const array = [1, 2, 3]

// mutable
array.push(4)

//immutable
const newArray = array.concat(4)
```

--

### Ventajas de los datos inmutables

--

### Ventajas de los datos inmutables

* Evitar efectos inesperados

--

## FP vs Imperativo

--

challenge

--

Sumar la edad de los usuarios adultos:

```javascript
const users = [
  {
    name: "Jesús",
    age: 27
  },
  {
    name: "María",
    age: 33
  },
  {
    name: "Sara",
    age: 34
  },
  {
    name: "Pedro",
    age: 15
  }
]
```

--

Imperativo:

```javascript
let total = 0
const adults = []

for (let user of users) {
  if (user.age > 18) {
    adults.push(user)
  }
}

for (let adult of adults) {
  total += adult.age
}

total // => 94
```

--

FP:

```javascript
const isAdult = user => user.age > 18
const prop = key => obj => obj[key]
const add = (a, b) => a + b

const total = users
  .filter(isAdult)
  .map(prop("age"))
  .reduce(add, 0) // => 94
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
## Curry

--

## Creando funciones a partir de funciones

--

Muchas veces es necesario crear funciones a partir de funciones ya existentes.

```javascript
const prop = (key obj) => obj[key]
const getAge = (user) => prop('age', 'user')

getAge({ age: 30}) // 30
```

--

Ese es un proceso manual que puede hacer de forma automática.

Si los usuarios tienen muchas propiedades se tendría que escribir una función por cada propiedad

```javascript
const prop = (key obj) => obj[key]
const getAge = (user) => prop('age', 'user')
const getName = (user) => prop('name', 'user')
...
```

---
