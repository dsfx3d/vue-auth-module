import { AuthStrategy } from './AuthModule'
import { GenericObject } from './globals'

export interface PluginConfig {
  prototype?: PrototypePluginConfig
  scheme?: GenericObject
  strategy: AuthStrategy
}

export interface PrototypePluginConfig {
  auth: string
  login: string
  logout: string
}
