const Workshopper = require("workshopper")
const path = require("path")
const fs = require("fs")

class WorkshopperExtends extends Workshopper {
  constructor(...args) {
    super(...args)
  }

  loadExercise(name) {
    this.writeTemplate(name)
    return super.loadExercise(name)
  }

  writeTemplate(name) {
    const problemName = name.toLocaleLowerCase().replace(" ", "_")

    const template = path.resolve(
      __dirname,
      "..",
      "exercises",
      problemName,
      "template.js"
    )

    const destination = process.cwd() + "/" + problemName + ".js"

    if (!fs.existsSync(destination)) {
      const src = fs.readFileSync(template)
      fs.writeFileSync(destination, src)
    }
  }
}

module.exports = (...args) => Reflect.construct(WorkshopperExtends, args)
