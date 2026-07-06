import { Newsreader } from 'next/font/google'
import localFont from 'next/font/local'

export const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
})

export const departureMono = localFont({
  src: '../public/fonts/DepartureMono-Regular.woff2',
  variable: '--font-mono',
  display: 'swap'
})
