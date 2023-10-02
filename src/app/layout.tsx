import type { Metadata } from 'next'

import '../app/globals.css'

export const metadata: Metadata = {
  title: 'Kenny Portfolio',
  description: 'Portfolio following nextjs documentation'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}