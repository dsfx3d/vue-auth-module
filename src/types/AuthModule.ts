import { GenericObject } from './globals'

export interface AuthStrategy {
  [key: string]: AuthStrategyMethod
}

export type AuthStrategyMethod = (scheme: GenericObject) => void
