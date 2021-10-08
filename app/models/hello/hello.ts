import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const HelloModel = types
  .model("Hello")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type HelloType = Instance<typeof HelloModel>
export interface Hello extends HelloType {}
type HelloSnapshotType = SnapshotOut<typeof HelloModel>
export interface HelloSnapshot extends HelloSnapshotType {}
export const createHelloDefaultModel = () => types.optional(HelloModel, {})
