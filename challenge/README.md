## Challenge

Con la estructura de datos:

```javascript
const apiResponse = {
  movies: [
    {
      id: 1,
      name: "movie_1",
      starts: 5,
      actors: [
        {
          id: 1,
          name: "actor_1",
          starts: 5
        },
        {
          id: 2,
          name: "actor_2",
          starts: 4
        },
        {
          id: 3,
          name: "actor_3",
          starts: 1
        }
      ]
    },
    {
      id: 2,
      name: "movie_2",
      starts: 2,
      actors: [
        {
          id: 1,
          name: "actor_1",
          starts: 5
        },
        {
          id: 3,
          name: "actor_3",
          starts: 4
        }
      ]
    },
    {
      id: 3,
      name: "movie_3",
      starts: 4,
      actors: [
        {
          id: 2,
          name: "actor_2",
          starts: 3
        },
        {
          id: 3,
          name: "actor_3",
          starts: 1
        }
      ]
    }
  ]
}
}
```

- Encontrar nombres únicos de los actores en cada película
- El nombre del mejor actor (es la suma de todas las estrellas en cada película recuerda que los actores pueden estar en varias películas)
- La película con mayor puntuación (La de más estrellas)
- Resumen final

Demostrar

- Reutilizable (demostrar que funciones son reutilizables fuera del dominio)
- Comprensible
- Resilente a cambios (tiene que resistir cambios estructurales)

resumen final

```javascript
{
    actors: {
        movie_1: [ 'actor_1', 'actor_2', 'actor_3' ],
        movie_2: [ 'actor_1', 'actor_3' ],
        movie_3: [ 'actor_2', 'actor_3' ]
    },
    bestActor: 'actor_1',
    bestMovie: {
        id: 1,
        name: 'movie_1',
        starts: 5,
    }
}
```

Nombres únicos de los actores en cada película:

```javascript
// resultado esperado
{
    movie_1: [ 'actor_1', 'actor_2', 'actor_3' ],
    movie_2: [ 'actor_1', 'actor_3' ],
    movie_3: [ 'actor_2', 'actor_3' ]
}
```

El nombre del mejor actor

```javascript
// resultado esperado

"actor_1"
```

La película con mayor puntuación (La de más estrellas)

```javascript
// resultado esperado
{
    id: 1,
    name: 'movie_1',
    starts: 5,
}
```

y resumen final:

```javascript
{
    actors: {
        movie_1: [ 'actor_1', 'actor_2', 'actor_3' ],
        movie_2: [ 'actor_1', 'actor_3' ],
        movie_3: [ 'actor_2', 'actor_3' ]
    },
    bestActor: 'actor_1',
    bestMovie: {
        id: 1,
        name: 'movie_1',
        starts: 5,
    }
}
```
