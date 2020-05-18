export abstract class BasePluginError extends Error {
  protected static errorName: string = 'BasePluginError'
  protected static label: string = 'vue-auth-module'
  protected static tag: string = 'error'

  constructor(
    msg: string = 'unknown error',
    name: string = null,
    tag: string = null,
    label: string = null
  ) {
    label = label || BasePluginError.label
    tag = tag || BasePluginError.tag
    msg = `[${label}][${tag}]: ${msg}`
    super(msg)

    this.name = name || BasePluginError.errorName
  }
}
