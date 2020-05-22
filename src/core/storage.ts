import authModule from '../contrib/vuex/store/auth'
import { GenericObject } from '../types/globals'
import { PluginConfig } from '../types/PluginConfig'

export class Storage {
  private _store: any
  private config: PluginConfig

  /**
   * @constructor
   * @public
   * @since 0.1.0
   * @param {PluginConfig} config plugin config
   */
  constructor(config: PluginConfig) {
    if (config) {
      this.setConfig(config)
    }
  }

  /**
   * @public
   * @since 0.1.0
   * @returns the vuex store object
   */
  public get store() {
    return this._store
  }

  /**
   * sets config of the storage
   *
   * @public
   * @since 0.1.0
   * @param {PluginConfig} config
   * @returns storage instance
   */
  public setConfig(config: PluginConfig) {
    this.config = config
    return this
  }

  /**
   * sets the vuex store of the storage
   *
   * @public
   * @since 0.1.0
   * @param {any} store vuex store instance
   * @returns storage instance
   */
  public setStore(store: any) {
    this._store = store
    this.init(this.config)
    return this
  }

  /**
   * initializes storage
   *
   * @private
   * @since 0.1.0
   * @param {PluginConfig} config plugin options passed to install function
   */
  private init(config: PluginConfig) {
    const schemes: GenericObject = config.scheme

    for (const scheme of Object.keys(schemes)) {
      this.initScheme(scheme)
    }
  }

  /**
   * initializes storage for an auth scheme
   *
   * @private
   * @since 0.1.0
   * @param {string} scheme name of the scheme
   */
  private initScheme(scheme: string) {
    this.initStore(scheme)
  }

  /**
   * initiallize vuex auth module for a scheme
   *
   * @private
   * @since 0.1.0
   * @param {string} scheme namespace of the vuex module
   */
  private initStore(scheme: string) {
    this.store.registerModule(scheme, authModule)
  }
}
