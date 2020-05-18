import { PrototypePluginConfig } from '../types/PluginConfig'

/**
 * default prototype properties.
 * The prototype properties are used to set
 * vue's prototype properties of this plugin.
 * All of these properties must be present.
 */
const prototype: PrototypePluginConfig = {
  auth: '$auth',
  login: '$login',
  logout: '$logout'
}

/**
 * default configurations of plugin options.
 * This object's properties are used as a fallback if
 * plugin options are missing in install.
 * This object is merged with the plugin options passed to
 * the install method
 */
export const DEFAULT_PLUGIN_CONFIG = {
  prototype
}
