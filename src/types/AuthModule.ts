import { GenericObject } from './globals'

export interface AuthStrategy {
  login(scheme: GenericObject): void
  profile(scheme: GenericObject): void
  logout(scheme: GenericObject): void
}
