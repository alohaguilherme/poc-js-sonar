const sum = require("../src/sum")


test("add 1 + 2 to be qual 3", () => {
  let a = 1
  let b = 2
  expect(sum(a, b)).toBe(3)
});