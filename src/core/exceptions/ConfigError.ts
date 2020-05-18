import { BasePluginError } from './BasePluginError'

export class ConfigError extends BasePluginError {
  protected static errorName: string = 'PluginConfigError'
  protected static tag: string = 'config-error'

  /**
   * default constructor.
   * calls the custom constructor of BasePluginError
   *
   * @constructor
   * @since 0.1.0
   * @param {string} msg The raw error message
   */
  constructor(msg: string = 'config error') {
    super(msg, ConfigError.errorName, ConfigError.tag)
  }
}
