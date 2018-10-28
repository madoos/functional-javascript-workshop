const {
  data,
  doResumeFPStyle,
  doResumeVStyle,
  doResumeRamdaStyle
} = require("./solutions")
const { Suite } = require("benchmark")

const suite = new Suite()

suite
  .add("FP Solution:", () => doResumeFPStyle(data))
  .add("RAMDA Solution:", () => doResumeRamdaStyle(data))
  .add("V Solution:", () => doResumeVStyle(data))
  .on("cycle", ({ target }) => console.log(String(target)))
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"))
  })
  .run()
