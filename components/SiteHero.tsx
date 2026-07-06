import * as React from 'react'

import * as config from '@/lib/config'
import { getSiteHero, type SiteHeroLink } from '@/lib/get-site-hero'
import { GitHubIcon } from '@/lib/icons/github'
import { LinkedInIcon } from '@/lib/icons/linkedin'
import { MoonIcon } from '@/lib/icons/moon'
import { SunIcon } from '@/lib/icons/sun'
import { TwitterIcon } from '@/lib/icons/twitter'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './SiteHero.module.css'

function formatBioLinks(links: SiteHeroLink[]) {
  return links.map((link, index) => {
    const separator =
      index === 0
        ? ''
        : index === links.length - 1
          ? links.length > 1
            ? ', and '
            : ''
          : ', '

    return (
      <React.Fragment key={link.href}>
        {separator}
        <a
          className={styles.bioLink}
          href={link.href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {link.label}
        </a>
      </React.Fragment>
    )
  })
}

export function SiteHero() {
  const hero = getSiteHero()
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.name}>{hero.name}</h1>
          <p className={styles.tagline}>{hero.tagline}</p>
        </div>

        <div className={styles.nav}>
          {hasMounted && (
            <button
              type='button'
              className={styles.navIcon}
              onClick={toggleDarkMode}
              title='Toggle dark mode'
              aria-label='Toggle dark mode'
            >
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </button>
          )}

          {config.twitter && (
            <a
              className={styles.navIcon}
              href={`https://x.com/${config.twitter}`}
              title={`X @${config.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <TwitterIcon />
            </a>
          )}

          {config.linkedin && (
            <a
              className={styles.navIcon}
              href={`https://www.linkedin.com/in/${config.linkedin}`}
              title={`LinkedIn ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon />
            </a>
          )}

          {config.github && (
            <a
              className={styles.navIcon}
              href={`https://github.com/${config.github}`}
              title={`GitHub @${config.github}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>

      <div className={styles.intro}>
        <div className={styles.avatar} aria-hidden='true'>
          {hero.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hero.avatarUrl}
              alt=''
              className={styles.avatarImage}
            />
          ) : (
            hero.avatarEmoji
          )}
        </div>

        <p className={styles.bio}>
          {hero.bioIntro}
          {formatBioLinks(hero.bioLinks)}
          {hero.bioOutro}
        </p>
      </div>
    </section>
  )
}
