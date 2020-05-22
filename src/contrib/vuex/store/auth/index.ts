import { GenericObject } from '../../../../types/globals'
import { VuexModule } from '../../types'
import { mutations } from './mutations'

const initState = (): GenericObject => ({
  busy: false,
  loggedIn: false,
  user: {}
})
const state: GenericObject = initState()

const module: VuexModule = {
  namespaced: true,
  state,
  // tslint:disable-next-line: object-literal-sort-keys
  mutations
}

export default module
