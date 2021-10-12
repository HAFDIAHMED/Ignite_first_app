import { TodoModel } from "./todo"

test("can be created", () => {
  const instance = TodoModel.create({})

  expect(instance).toBeTruthy()
})
