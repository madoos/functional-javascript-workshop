# Tarea

Convierta el siguiente código de un for-loop en Array#map:

```js
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

module.exports = doubleAll
```

## Argumentos

* numbers: Una matriz de 0 a 20 enteros entre 0 y 9

## Conditions

* Su solución debe usar Array.prototype.map()
* No use ningún ciclo for / while o Array.prototype.forEach.
* No cree ninguna función innecesaria, p. ayudantes

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
