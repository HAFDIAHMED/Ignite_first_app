import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TodoModel = types
  .model("Todo")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type TodoType = Instance<typeof TodoModel>
export interface Todo extends TodoType {}
type TodoSnapshotType = SnapshotOut<typeof TodoModel>
export interface TodoSnapshot extends TodoSnapshotType {}
export const createTodoDefaultModel = () => types.optional(TodoModel, {})
