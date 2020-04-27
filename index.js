const alfy = require("alfy")
const clipboardy = require("clipboardy")
const changeCase = require("change-case")

const text = clipboardy.readSync()
const icon = { path: alfy.icon.get("RightContainerArrowIcon") }

const items = alfy
  .inputMatches(
    [
      { subtitle: "Camel Case", fn: changeCase.camelCase },
      { subtitle: "Capital Case", fn: changeCase.capitalCase },
      { subtitle: "Constant Case", fn: changeCase.constantCase },
      { subtitle: "Dot Case", fn: changeCase.dotCase },
      { subtitle: "Header Case", fn: changeCase.headerCase },
      { subtitle: "No Case", fn: changeCase.noCase },
      { subtitle: "Param Case", fn: changeCase.paramCase },
      { subtitle: "Pascal Case", fn: changeCase.pascalCase },
      { subtitle: "Path Case", fn: changeCase.pathCase },
      { subtitle: "Sentence Case", fn: changeCase.sentenceCase },
      { subtitle: "Snake Case", fn: changeCase.snakeCase },
    ],
    "subtitle"
  )
  .map(({ fn, ...rest }) => ({
    ...rest,
    icon,
    title: fn(text),
    arg: fn(text),
  }))

alfy.output(items)
