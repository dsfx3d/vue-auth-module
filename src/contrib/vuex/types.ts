import { GenericObject } from '../../types/globals'

/**
 * interface for vuex module
 */
export interface VuexModule {
  namespaced: boolean
  state: GenericObject
  mutations: Mutations
}

/**
 * interface for mutations object
 */
export interface Mutations {
  [mutation: string]: Mutation
}

/**
 * mutation function type
 */
export type Mutation = (state: GenericObject, payload: MutationPayload) => void

/**
 * interface for mutation payload
 */
export interface MutationPayload {
  path: string
  value: boolean | GenericObject
}
