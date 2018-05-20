#!/usr/bin/env node

"use strict"

const Workshopper = require("./lib/CustomWorkshopper")

Workshopper({
  name: "functional-javascript",
  appDir: __dirname,
  languages: ["es"]
})
