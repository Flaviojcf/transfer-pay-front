import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const metadata: Metadata = {
  title: 'TransferPay',
  description: 'Created by @FlavioJcf',
  icons: [
    {
      url: '/picpayLogo.png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-customGreen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
