import { DEFAULT_PLUGIN_CONFIG } from '../src/helpers/defaults'
import { install, ERRORS as INSTALL_ERRORS } from '../src/install'
import { ConfigError } from '../src/core/exceptions/ConfigError'

let Vue = null

describe('plugin installation', () => {
  beforeEach(() => {
    Vue = {
      prototype: {}
    }
  })

  it('defines prototype property for auth module if prototype config is undefined in plugin config', () => {
    const config = getPluginConfig()
    install(Vue, config)

    const {
      prototype: { auth }
    } = DEFAULT_PLUGIN_CONFIG
    expect(Vue.prototype[auth]).not.toBeUndefined()
  })

  it('defines prototype property for auth module if auth property is undefined in prototype config', () => {
    const config = getPluginConfig()
    config.prototype = {}
    install(Vue, config)

    const {
      prototype: { auth }
    } = DEFAULT_PLUGIN_CONFIG
    expect(Vue.prototype[auth]).not.toBeUndefined()
  })

  it('uses `prototype` config to define prototype property for auth module', () => {
    const config = getPluginConfig()
    config.prototype = {
      auth: '$auth'
    }

    install(Vue, config)
    expect(Vue.prototype.$auth).not.toBeUndefined()
  })

  it('defines a read-only auth module prototype property', () => {
    const config = getPluginConfig()
    install(Vue, config)

    const {
      prototype: { auth }
    } = DEFAULT_PLUGIN_CONFIG
    expect(() => (Vue.prototype[auth] = {})).toThrow()
  })

  it('throws error if strategy config is undefined in plugin config', () => {
    expect(() => install(Vue, {})).toThrowError(
      new ConfigError(INSTALL_ERRORS.NO_DEF_IN_CONFIG('strategy'))
    )
  })
})

const getPluginConfig = () => ({
  strategy: {
    login: () => {},
    profile: () => {},
    logout: () => {}
  }
})
