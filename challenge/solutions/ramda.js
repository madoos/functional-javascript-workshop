const {
  curry,
  map,
  pipe,
  flatten,
  groupBy,
  pluck,
  reduce,
  head,
  evolve,
  path,
  prop
} = require("ramda")

const { mapConverge } = require("./fp.utils")

const get = curry((route, x) => {
  return path(route.split("."), x)
})

const resume = () => 5
///////////////////////////////////////////////////////////////////////////////////////////
const getMovies = prop("movies")
const sumStarts = (result, actor) => result + actor.starts
const findBestActorName = pipe(
  Object.entries,
  reduce((a, b) => (a[1] > b[1] ? a : b), []),
  head
)
const findBestMovie = (a, b) => (a.starts > b.starts ? a : b)
///////////////////////////////////////////////////////////////////////////////////////////

const getActors = pipe(
  getMovies, // O(1)
  mapConverge("actors", "name", "movieId") // O(n)
) // O(n)

const getActorsByMovie = pipe(
  getActors, //  O(n)
  groupBy(prop("movieId")), // O(n)
  map(pluck("name")) // O(n)
)

const bestActor = pipe(
  getActors, // O(n)
  groupBy(prop("name")), // O(n)
  map(reduce(sumStarts, 0)), // O(n)
  findBestActorName // O(n)
)

const bestMovie = pipe(
  getMovies, // O(1)
  reduce(findBestMovie, {}) // O(n**2)
)

const doSummary = data => ({
  actors: getActorsByMovie(data), // O(n)
  bestActor: bestActor(data), // O(n) ?
  bestMovie: bestMovie(data) // O(n) ?
})

module.exports = doSummary

//const apiResponse = require("./data")
//console.log(getActors(apiResponse))
//console.log(getActorsByMovie(apiResponse))
//console.log(bestMovie(apiResponse))

//console.log(doSummary(apiResponse))
