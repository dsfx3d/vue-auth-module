import { Auth, ERRORS as AUTH_ERRORS } from '../src/core/auth'
import { ConfigError } from '../src/core/exceptions/ConfigError'

const testKeyInStrategy = key => {
  it(`throws error if ${key} function is not defined in strategy`, () => {
    const { [key]: k, ...strategy } = getAuthStategy()

    expect(() => new Auth(strategy)).toThrowError(
      new ConfigError(AUTH_ERRORS.NO_DEF_IN_STRATEGY(key))
    )
  })
}

const testKeyInStrategyIsAFunction = key => {
  it(`throws error if ${key} property in strategy is not a function`, () => {
    const { [key]: k, ...strategy } = getAuthStategy()
    strategy[key] = 'foo'

    expect(() => new Auth(strategy)).toThrowError(
      new TypeError(AUTH_ERRORS.TYPE_ERROR_IN_STRATEGY(key))
    )
  })
}

describe('auth module', () => {
  testKeyInStrategy('login')
  testKeyInStrategyIsAFunction('login')
  testKeyInStrategy('profile')
  testKeyInStrategyIsAFunction('profile')
  testKeyInStrategy('logout')
  testKeyInStrategyIsAFunction('logout')
})

const getAuthStategy = () => ({
  login: () => {},
  profile: () => {},
  logout: () => {}
})
