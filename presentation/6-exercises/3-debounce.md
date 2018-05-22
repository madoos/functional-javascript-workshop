### debounce Challenge

```bash
# Ejecutar en el terminal: madoos-fp-js-workshop
# Seleccionar: DEBOUNCE
# Seguir instrucciones
```

--

Crea una función que retorne una función que, mientras sea invocada, no
se ejecute. Se ejecutará cuando deje de ser invocada durante `ms` millisegundos.
Si el último argumento (`immediate`) es `true`, se invocará primero y después
dejará de ejecutarse cuando sea invocada.

--

```javascript
const expensiveOnScrollFn = e => {
    //do something on every scroll event
};

const efficientOnScrollFn = debounce(expensiveOnScrollFn, 250);

window.addEventListener('scroll', efficientOnScrollFn);
```

--

Solución:

```javascript
const debounce = (fn, ms, immediate = false) => {
    let timeout;
    return (...args) => {
        const later = () => {
            timeout = null;
            if (!immediate) fn.apply(null, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, ms);
        if (callNow) fn.apply(null, args);
    };
};
```
