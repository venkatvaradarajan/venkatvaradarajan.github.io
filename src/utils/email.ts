
import { profile } from '../data/content'

export function getEmail(): string {
  const user = atob(profile.user)
  const domain = atob(profile.domain)
  return `${user}@${domain}`
}
