import { AuthStrategy } from '../types/AuthModule'
import { GenericObject } from '../types/globals'

export class Auth {
  private _scheme: GenericObject
  private _strategy: AuthStrategy

  constructor(strategy: AuthStrategy, scheme: GenericObject) {
    this._scheme = scheme
    this.setStrategy(strategy)
  }

  public get scheme(): GenericObject {
    return this._scheme
  }

  public get strategy(): AuthStrategy {
    return this._strategy
  }

  private setStrategy(strategy: AuthStrategy) {
    if (!('login' in strategy)) {
      throw Error()
    }

    if (typeof strategy.login !== 'function') {
      throw Error()
    }
    this._strategy = strategy
  }
}
