### throttle Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: THROTTLE
# Seguir instrucciones
```

--

Crea una función que retorne una función que solo se ejecute cada `ms` millisegundos.
La primera vez que es invocada debe ejecutarse inmediatamente.

--

```javascript
const apiCall = () => {
    /*call api*/
};
const throttledApiCall = throttle(apiCall, 200);

//se ejecuta una vez cada 200ms
```

--

Solución:

```javascript
function throttle(fn, ms) {
    let wait = false;
    return (...args) => {
        if (wait) {
            return;
        }
        wait = true;
        setTimeout(() => {
            wait = false;
        }, ms);
        return fn(...args);
    };
}
```
