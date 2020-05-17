import { PrototypePluginConfig } from '../types/PluginConfig'

const prototype: PrototypePluginConfig = {
  auth: '$auth',
  login: '$login',
  logout: '$logout'
}

export const DEFAULT_PLUGIN_CONFIG = {
  prototype
}
