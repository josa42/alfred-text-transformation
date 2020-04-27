const assert = require("assert")
const alfyTest = require("alfy-test")

describe("Text Transformation", () => {
  beforeEach(() => (global.console.log = () => {}))

  it("should return -1 when the value is not present", async () => {
    const alfy = alfyTest()
    const result = await alfy("Rainbow")

    assert.deepEqual(result, [
      {
        title: "Unicorn",
        subtitle: "Rainbow",
      },
    ])
  })
})

