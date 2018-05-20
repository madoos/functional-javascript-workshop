const Workshopper = require("workshopper")
const path = require("path")
const fs = require("fs")

class WorkshopperExtends extends Workshopper {
  constructor(...args) {
    super(...args)
  }

  loadExercise(name) {
    this._writeTemplate(name)
    return super.loadExercise(name)
  }

  _writeTemplate(name) {
    const exercise = name.toLocaleLowerCase().replace(" ", "_")

    const template = path.resolve(
      __dirname,
      "..",
      "exercises",
      exercise,
      "template.js"
    )

    const destination = process.cwd() + "/" + exercise + ".js"

    if (!fs.existsSync(destination)) {
      const src = fs.readFileSync(template)
      fs.writeFileSync(destination, src)
    }
  }
}

module.exports = (...args) => Reflect.construct(WorkshopperExtends, args)
