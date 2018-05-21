# Tarea

Implementar la función map para objectos.

## Argumentos

* fn
* Objeto

## Conditions

* Aplicar la función a cada valor del objeto pasando el valor, la clave, el objeto

## ejemplo

```javascript
const concatValueKey = (value, key, object) => `${key}-${value}`
mapObject(concatValueKey, { a: 1, b: 2 }) // { a: "a-1", b: "b-2"}
```
