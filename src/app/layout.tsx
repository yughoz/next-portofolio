import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Frontend Developer focusing on building modern, responsive, and user-friendly web applications',
  keywords: ['Frontend Developer', 'Web Developer', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Yughoz' }],
  openGraph: {
    title: 'Portfolio',
    description: 'Frontend Developer focusing on building modern, responsive, and user-friendly web applications',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}