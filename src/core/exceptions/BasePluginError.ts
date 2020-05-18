export abstract class BasePluginError extends Error {
  protected static errorName: string = 'BasePluginError'
  protected static label: string = 'vue-auth-module'
  protected static tag: string = 'error'

  /**
   * cooks an error message from passed arguments.
   * sets the name of the error.
   * This constructor prepares the eroor message and calls
   * super on the default constructor of class Error
   *
   * @constructor
   * @since 0.1.0
   * @param {string} msg The raw error message
   * @param {string} name The name of the error
   * @param {string} tag The tag to use in error message
   * @param {string} label The label to use in error message
   */
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
