const data = require("./data")

const { flip, mapConverge, reduce } = require("./fp.utils")
const { map, filter, comp, into } = require("transducers-js")
const pipe = flip(comp)

const getActors = pipe(
  x => x,
  src => src.movies,
  reduce((acc, item) => {
    return acc.concat(
      item.actors.map(actor => {
        actor.movieId = item.id
        return actor
      })
    )
  }, [])
  //  mapConverge("actors", "name", "movieId") // O(n)
) // O(n)

console.log(getActors(data))
