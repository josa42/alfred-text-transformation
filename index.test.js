const assert = require("assert")
const alfyTest = require("alfy-test")
const clipboardy = require("clipboardy")

let clipboard = ""

describe("Text Transformation", () => {
  beforeEach(async () => (clipboard = await clipboardy.read()))
  afterEach(async () => await clipboardy.write(clipboard))

  const cases = [
    ["Camel Case", "loremIpsum"],
    ["Capital Case", "Lorem Ipsum"],
    ["Constant Case", "LOREM_IPSUM"],
    ["Dot Case", "lorem.ipsum"],
    ["Header Case", "Lorem-Ipsum"],
    ["No Case", "lorem ipsum"],
    ["Param Case", "lorem-ipsum"],
    ["Pascal Case", "LoremIpsum"],
    ["Path Case", "lorem/ipsum"],
    ["Sentence Case", "Lorem ipsum"],
    ["Snake Case", "lorem_ipsum"],
  ]

  for (const [subtitle, title] of cases) {
    it(`transforms to "${subtitle}"`, async () => {
      await clipboardy.write("lorem ipsum")

      const alfy = alfyTest()
      const icon = {
        path:
          "/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/RightContainerArrowIcon.icns",
      }

      const result = await alfy(subtitle)
      assert.deepEqual(result, [{ title, subtitle, icon, arg: title }])
    })
  }
})

