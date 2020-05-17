import { Auth } from '../src/core/auth'

const testKeyInStrategy = key => {
  it(`throws error if ${key} function is not defined in strategy`, () => {
    const { [key]: k, ...strategy } = getAuthStategy()
    expect(() => new Auth({}, strategy)).toThrow(Error)
  })
}

const testKeyInStrategyIsAFunction = key => {
  it(`throws error if ${key} property in strategy is not a function`, () => {
    const { [key]: k, ...strategy } = getAuthStategy()
    strategy[key] = 'foo'
    expect(() => new Auth({}, strategy)).toThrow(Error)
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
