import './css/style.css'

import { Inter, Inter_Tight } from 'next/font/google'
import AOS from '@/components/aos'
import { Analytics } from "@vercel/analytics/react"
import PreviewImage from '@/public/images/vase.jpg'
import Logo from '@/public/images/logo.png'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const inter_tight = Inter_Tight({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap'
})

export const metadata = {
  title: 'CarefulAI',
  description: 'A new way to understand patents.',
  openGraph: {
    title: 'CarefulAI',
    description: 'A new way to understand patents.',
    url: 'https://trycareful.ai',
    siteName: 'CarefulAI',
    images: [
      {
        url: 'https://trycareful.ai' + PreviewImage.src,
        width: 800,
        height: 600,
      },
      {
        url: 'https://trycareful.ai' + PreviewImage.src,
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarefulAI',
    description: 'A new way to understand patents.',
    creator: 'Careful AI, Inc.',
    images: ['https://trycareful.ai' + PreviewImage.src],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: Logo.src,
    shortcut: Logo.src,
    apple: Logo.src,
    other: {
      rel: Logo.src,
      url: Logo.src,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOS />
      <body className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-white text-zinc-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
