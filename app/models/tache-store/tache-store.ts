import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { TacheModel } from "../tache/tache"

/**
 * Model description here for TypeScript hints.
 */
export const TacheStoreModel = types
  .model("TacheStore")
  .props({
    taches: types.array(TacheModel)
  })
  
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    addTache(newTache){
      self.taches.push(newTache)

    }
  }))
  // eslint-disable-line @typescript-eslint/no-unused-vars

type TacheStoreType = Instance<typeof TacheStoreModel>
export interface TacheStore extends TacheStoreType {}
type TacheStoreSnapshotType = SnapshotOut<typeof TacheStoreModel>
export interface TacheStoreSnapshot extends TacheStoreSnapshotType {}
export const createTacheStoreDefaultModel = () => types.optional(TacheStoreModel, {taches: ["task 1", "tache 2"]})
