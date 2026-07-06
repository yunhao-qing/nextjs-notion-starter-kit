export interface SiteHeroLink {
  label: string
  href: string
}

export interface SiteHeroConfig {
  name: string
  tagline: string
  avatarUrl?: string | null
  avatarEmoji?: string
  bioIntro: string
  bioLinks: SiteHeroLink[]
  bioOutro: string
}

// Replace with your real info in site.config.ts when ready.
export const defaultSiteHero: SiteHeroConfig = {
  name: 'Professor Barnaby Gigglesworth',
  tagline: 'Chief Executive Toaster at The Moon',
  avatarEmoji: '🥸',
  bioIntro:
    "I'm Barnaby, a professional cloud-shouter and part-time penguin interpreter. I think a lot about ",
  bioLinks: [
    { label: 'invisible soup recipes', href: 'https://example.com/soup' },
    { label: 'Atlantis real estate', href: 'https://example.com/atlantis' },
    { label: 'competitive napping', href: 'https://example.com/nap' }
  ],
  bioOutro:
    '. I grew up mostly in a hollowed-out giant pumpkin and now live wherever the Wi-Fi is strong enough to load a single JPEG.'
}