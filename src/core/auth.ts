import { AuthStrategy, AuthStrategyMethod } from '../types/AuthModule'
import { GenericObject } from '../types/globals'
import { ConfigError } from './exceptions/ConfigError'

/**
 * This is the single core class which will manage the entire process of
 * authentication and auth state management
 *
 * @since 0.1.0
 */
export class Auth {
  private _scheme: GenericObject
  private _strategy: AuthStrategy
  private _storage: any

  /**
   * @constructor
   * @since 0.1.0
   * @param {GenericObject} scheme (optional) scheme followed by auth strategy
   */
  constructor(scheme: GenericObject) {
    this._scheme = scheme
  }

  /**
   * Immutable scheme of auth strategy
   *
   * @since 0.1.0
   * @public
   */
  public get scheme(): GenericObject {
    return this._scheme
  }

  /**
   * Immutable auth strategy
   *
   * @since 0.1.0
   * @public
   */
  public get strategy(): AuthStrategy {
    return this._strategy
  }

  /**
   * sets the storage of the instance.
   *
   * @public
   * @since 0.1.0
   * @param {any} storage the storage object for auth
   * @returns instance
   */
  public setStorage(storage: any) {
    this._storage = storage
    return this
  }

  /**
   * sets the auth strategy of the instance
   *
   * @since 0.1.0
   * @param {AuthStrategy} strategy the auth strategy
   * @returns instance
   */
  public setStrategy(strategy: AuthStrategy) {
    this._setStrategy(strategy)
    return this
  }

  /**
   * This method set auth strategy after making sure that the
   * strategy argument passes a valid strategy object
   *
   * @since 0.1.0
   * @private
   * @param {AuthStrategy} strategy The auth strategy
   *
   * @throws {ConfigError} if a required property of strategy is not defined
   * @throws {TypeError} if the type of a property in strategy does not match the expected type
   */
  private _setStrategy(strategy: AuthStrategy) {
    this.validateStrategy(strategy)
    this._strategy = strategy
  }

  /**
   * This method validates startegy object by checking if all of
   * it's required properties exist and are functions.
   *
   * @since 0.1.0
   * @private
   * @param {AuthStrategy} strategy The auth strategy
   *
   * @throws {ConfigError} if a required property of strategy is not defined
   * @throws {TypeError} if the type of a property in strategy does not match the expected type
   */
  private validateStrategy(strategy: AuthStrategy) {
    const expectedProperties = ['login', 'profile', 'logout']
    for (const prop of expectedProperties) {
      if (!(prop in strategy)) {
        throw new ConfigError(ERRORS.NO_DEF_IN_STRATEGY(prop))
      }
      if (typeof strategy[prop] !== 'function') {
        throw new TypeError(ERRORS.TYPE_ERROR_IN_STRATEGY(prop))
      }
    }
  }
}

/**
 * error messages thrown in this module
 */
export const ERRORS = {
  NO_DEF_IN_STRATEGY: (prop: string) =>
    `${prop} strategy is not defined, 'strategy.${prop}' must be a function in plugin options`,
  TYPE_ERROR_IN_STRATEGY: (prop: string) =>
    `'strategy.${prop}' must be a function in plugin options`
}
