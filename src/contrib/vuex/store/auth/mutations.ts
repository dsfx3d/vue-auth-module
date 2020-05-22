import { GenericObject } from '../../../../types/globals'
import { MutationPayload, Mutations } from '../../types'
import { MT_SET } from './constants'

export const mutations: Mutations = {
  [MT_SET]: (state: GenericObject, payload: MutationPayload) => {
    state[payload.path] = payload.value
  }
}
