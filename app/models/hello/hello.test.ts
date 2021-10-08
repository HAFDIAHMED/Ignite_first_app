import { HelloModel } from "./hello"

test("can be created", () => {
  const instance = HelloModel.create({})

  expect(instance).toBeTruthy()
})
