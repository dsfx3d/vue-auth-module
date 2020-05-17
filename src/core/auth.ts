import { AuthStrategy, AuthStrategyMethod } from '../types/AuthModule'
import { GenericObject } from '../types/globals'
import { ConfigError } from './exceptions/ConfigError'

export class Auth {
  private _scheme: GenericObject
  private _strategy: AuthStrategy

  /**
   *
   * @since 0.1.0
   * @param {AuthStrategy} strategy The auth strategy
   * @param {GenericObject} scheme (optional) scheme followed by auth strategy
   */
  constructor(strategy: AuthStrategy, scheme: GenericObject = {}) {
    this._scheme = scheme
    this.setStrategy(strategy)
  }

  /**
   * Immutable scheme of auth strategy
   *
   * @since 0.1.0
   */
  public get scheme(): GenericObject {
    return this._scheme
  }

  /**
   * Immutable auth strategy
   *
   * @since 0.1.0
   */
  public get strategy(): AuthStrategy {
    return this._strategy
  }

  /**
   * This method set auth strategy after making sure that the
   * strategy argument passes a valid strategy object
   *
   * @since 0.1.0
   * @param {AuthStrategy} strategy The auth strategy
   */
  private setStrategy(strategy: AuthStrategy) {
    this.validateStrategy(strategy)
    this._strategy = strategy
  }

  /**
   * This method validates startegy object by checking if all of
   * it's required properties exist and are functions.
   *
   * **Note**: throws error if validation fails
   *
   * @since 0.1.0
   * @param {AuthStrategy} strategy The auth strategy
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

export const ERRORS = {
  NO_DEF_IN_STRATEGY: (prop: string) =>
    `${prop} strategy is not defined, 'strategy.${prop}' must be a function in plugin options`,
  TYPE_ERROR_IN_STRATEGY: (prop: string) =>
    `'strategy.${prop}' must be a function in plugin options`
}
