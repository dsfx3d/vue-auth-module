export abstract class BasePluginError extends Error {
  protected errorName: string = 'BasePluginError'
  protected label: string = 'vue-auth-module'
  protected tag: string = 'error'

  constructor(msg: string = 'unknown error') {
    super(msg)
    Object.setPrototypeOf(this, {
      ...Object.getPrototypeOf(this),
      message: `[${this.label}][${this.tag}]: ${msg}`
    })
    this.name = this.errorName
  }
}
