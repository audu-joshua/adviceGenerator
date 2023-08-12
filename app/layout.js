import Head from 'next/head'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })


export const metadata = {
  title: 'Quotes Generator',
  description: 'Generate Random Quotes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
