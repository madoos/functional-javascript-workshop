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
// ...
```
