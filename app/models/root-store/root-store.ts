import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { TacheStore, TacheStoreModel } from "../tache-store/tache-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({

    tacheStore : types.optional(TacheStoreModel, {} as TacheStore)
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
