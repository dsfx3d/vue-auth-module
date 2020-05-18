import { BasePluginError } from './BasePluginError'

export class ConfigError extends BasePluginError {
  protected static errorName: string = 'PluginConfigError'
  protected static tag: string = 'config-error'

  constructor(msg: string = 'config error') {
    super(msg, ConfigError.errorName, ConfigError.tag)
  }
}
