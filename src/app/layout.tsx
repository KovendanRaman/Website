import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kovendan Jason Raman | Software Engineer & CS Honours',
  description:
    'Portfolio of Kovendan Jason Raman, a Computer Science Honours student at Wits University specialising in full-stack development, AI/ML, and modern web applications.',
  keywords: [
    'Kovendan Jason Raman',
    'Software Engineer',
    'Computer Science Honours',
    'Wits University',
    'Full-Stack Development',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Artificial Intelligence',
    'Machine Learning',
    'Parallel Computing',
    'OpenMP',
    'MPI',
    'Sanlam',
    'Portfolio',
    'Graduate Developer',
    'Web Development',
  ],
  authors: [{ name: 'Kovendan Jason Raman' }],
  creator: 'Kovendan Jason Raman',
  publisher: 'Kovendan Jason Raman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kovendan.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kovendan Jason Raman | Software Engineer & CS Honours',
    description:
      'Portfolio of Kovendan Jason Raman, a Computer Science Honours student at Wits University specialising in full-stack development, AI/ML, and modern web applications.',
    url: 'https://kovendan.vercel.app',
    siteName: 'Kovendan Jason Raman Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kovendan Jason Raman | Software Engineer & CS Honours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kovendan Jason Raman | Software Engineer & CS Honours',
    description:
      'Portfolio of Kovendan Jason Raman, a Computer Science Honours student at Wits University specialising in full-stack development, AI/ML, and modern web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'NEhqMI18P14wC0nbd91S57DDLzOm0hdit9f8lJ-na_E',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
