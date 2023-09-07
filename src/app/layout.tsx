import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../../Redux/Provider'
import { Header } from "./components/Header"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clone do youtube',
  description: `Esse clone do youtube foi criado com next, Tailwind e redux. É possivel assistir os vídeos que aparecem na página 
                inicial`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
    
      <body className={inter.className}>
      <Header/>
        {children}</body>

      </Providers>

    </html>
  )
}
