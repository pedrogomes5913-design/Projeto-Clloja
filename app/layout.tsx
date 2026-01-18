import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CH SMARTPHONES | Celulares Originais com Garantia em Aracaju',
  description: 'Celulares 100% originais, seminovos, com garantia de 90 dias e preco justo. Loja fisica em Aracaju-SE.',
  keywords: ['celulares', 'smartphones', 'aracaju', 'sergipe', 'seminovos', 'originais', 'garantia'],
  openGraph: {
    title: 'CH SMARTPHONES',
    description: 'Celulares 100% originais, seminovos, com garantia de 90 dias e preco justo.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
