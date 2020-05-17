import _Vue from 'vue'

import { Auth } from './core/auth'
import { DEFAULT_PLUGIN_CONFIG } from './helpers/defaults'
import { AuthStrategy } from './types/AuthModule'
import { GenericObject } from './types/globals'
import { PluginConfig } from './types/PluginConfig'

// tslint:disable-next-line: no-var-requires
const _merge = require('lodash.merge')

export const install = (Vue: typeof _Vue, config: PluginConfig): void => {
  config = _merge(config, DEFAULT_PLUGIN_CONFIG) as PluginConfig

  // strategy is a required plugin config
  if (config.strategy === undefined) {
    throw Error()
  }

  const scheme: GenericObject = config.scheme
  const strategy: AuthStrategy = config.strategy
  const auth = new Auth(strategy, scheme)

  Object.defineProperty(Vue.prototype, config.prototype.auth, {
    get() {
      return auth
    }
  })
}
