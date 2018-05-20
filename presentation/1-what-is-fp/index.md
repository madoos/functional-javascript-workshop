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
