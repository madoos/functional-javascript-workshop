# Tarea

Crear una función que evite que otra funcion se ejecute más de una vez

--

## Argumentos

* fn

## Conditions

* evitar que otra funcion se ejecute más de una vez

## ejemplo

```javascript
const debug = x => console.log(x)
const debugOnce = once(debug)

debugOnce(5) // 5
debugOnce(5) // no se ejecuta
```
