import { TodoStoreModel } from "./todo-store"

test("can be created", () => {
  const instance = TodoStoreModel.create({})

  expect(instance).toBeTruthy()
})
