import { BasePluginError } from './BasePluginError'

export class ConfigError extends BasePluginError {
  protected errorName: string = 'PluginConfigError'
  protected tag: string = 'config-error'
}
