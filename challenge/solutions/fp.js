const {
  curry,
  map,
  get,
  pipe,
  mapConverge,
  flatten,
  groupBy,
  pluck,
  reduce,
  resume,
  head,
  evolve,
  memoizeWith,
  join,
  prop
} = require("./fp.utils")

///////////////////////////////////////////////////////////////////////////////////////////
const getMovies = get("movies")
const sumStarts = (result, actor) => result + actor.starts
const findBestActorName = pipe(
  Object.entries,
  resume((a, b) => (a[1] > b[1] ? a : b)),
  head
)
const findBestMovie = (a, b) => (a.starts > b.starts ? a : b)
///////////////////////////////////////////////////////////////////////////////////////////

const getActors = pipe(
  getMovies, // O(1)
  mapConverge("actors", "name", "movieId")
)
// O(n)

const getActorsByMovie = pipe(
  getActors, //  O(n)
  groupBy("movieId"), // O(n)
  map(pluck("name")) // O(n)
)

const bestActor = pipe(
  getActors, // O(n)
  groupBy("name"), // O(n)
  map(reduce(sumStarts, 0)), // O(n)
  findBestActorName // O(n)
)

const bestMovie = pipe(
  getMovies, // O(1)
  resume(findBestMovie) // O(n**2)
)

const doSummary = evolve({
  actors: getActorsByMovie, // O(n)
  bestActor: bestActor, // O(n) ?
  bestMovie: bestMovie // O(n) ?
})

module.exports = doSummary
// const apiResponse = require("./data")
// console.log(getActorsByMovie(apiResponse))
// console.log(bestActor(apiResponse))
// console.log(bestMovie(apiResponse))
// console.log(doSummary(apiResponse))
