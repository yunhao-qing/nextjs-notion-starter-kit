import { getSiteConfig } from './get-config-value'
import {
  defaultSiteHero,
  type SiteHeroConfig,
  type SiteHeroLink
} from './site-hero'

export function getSiteHero(): SiteHeroConfig {
  return getSiteConfig('hero', defaultSiteHero)
}

export type { SiteHeroLink }
