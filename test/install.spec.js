import { DEFAULT_PLUGIN_CONFIG } from '../src/helpers/defaults'
import { install } from '../src/install'

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
    expect(() => (Vue.prototype[auth] = {})).toThrow(TypeError)
  })

  it('throws error if strategy config is undefined in plugin config', () => {
    expect(() => install(Vue, {})).toThrow(Error)
  })
})

const getPluginConfig = () => ({
  strategy: {
    login: () => {},
    profile: () => {},
    logout: () => {}
  }
})
