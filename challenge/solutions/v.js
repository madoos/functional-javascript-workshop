const doSummary = apiResponse => {
  const uniqNamesArr = apiResponse.movies.map(movie => [
    ...new Set(movie.actors.map(({ name }) => name))
  ])

  // Error estructural --> no es determinista EL PROGAMA NO FUNCIONA REALMENTE
  const uniqNames = uniqNamesArr.reduce((total, film, i) => {
    total[`movie_${i + 1}`] = film
    return total
  }, {})

  const actorGroupStars = apiResponse.movies
    .map(({ actors }) => actors)
    .reduce((acc, val) => acc.concat(val), [])
    .reduce((total, actor) => {
      total[actor.name] = actor.starts + (total[actor.name] || 0)
      return total
    }, {})

  // coste estructural no es necesario ordenar N LOG N ---> N
  const bestActor = Object.entries(actorGroupStars).sort(
    (a, b) => a[1] < b[1]
  )[0][0]

  // conste estructural no es necesario ordenar N LOG N ---> N
  const bestMovie = apiResponse.movies
    .map(({ id, name, starts }) => ({ id, name, starts }))
    .sort((a, b) => a.starts < b.starts)[0]

  // NO REUTLIZA PERO EL EJERCICIO ES REALIZADO EN 2O MINS (PERSPECTIVA IMPERATIVA PRIMERO RESULVE LUEGO ABSTRAE)
  const summary = {
    actors: uniqNames,
    bestActor,
    bestMovie
  }

  return summary
}

module.exports = doSummary
