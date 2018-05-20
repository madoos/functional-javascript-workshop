#!/usr/bin/env node

"use strict"

const Workshopper = require("./lib/Workshopper-extends")

Workshopper({
  name: "functional-javascript",
  appDir: __dirname,
  languages: ["en", "fr", "ko"]
})
