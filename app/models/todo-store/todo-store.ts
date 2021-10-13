import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { TodoModel } from ".."

/**
 * Model description here for TypeScript hints.
 */
export const TodoStoreModel = types
  .model("TodoStore")
  .props({
    todos : types.optional(types.array(TodoModel), [{  title : "task 1"},{  title : "task 2"} ])
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type TodoStoreType = Instance<typeof TodoStoreModel>
export interface TodoStore extends TodoStoreType {}   
type TodoStoreSnapshotType = SnapshotOut<typeof TodoStoreModel>
export interface TodoStoreSnapshot extends TodoStoreSnapshotType {}
export const createTodoStoreDefaultModel = () => types.optional(TodoStoreModel, {})
