import { Auth } from './core/auth'
import { ConfigError } from './core/exceptions/ConfigError'
import { DEFAULT_PLUGIN_CONFIG } from './helpers/defaults'
import { AuthStrategy } from './types/AuthModule'
import { GenericObject } from './types/globals'
import { PluginConfig } from './types/PluginConfig'
import { VueConstructor } from './types/VueConstructor'

// tslint:disable-next-line: no-var-requires
const _merge = require('lodash.merge')

export const install = (Vue: VueConstructor, config: PluginConfig): void => {
  config = _merge(config, DEFAULT_PLUGIN_CONFIG) as PluginConfig

  if (config.strategy === undefined) {
    throw new ConfigError(ERRORS.NO_DEF_IN_CONFIG('strategy'))
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

export const ERRORS = {
  NO_DEF_IN_CONFIG: (prop: string) =>
    `required property ${prop} is not defined in plugin options`
}
